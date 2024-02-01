import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  Alert,
} from "react-native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";
import { Plus, Maximize, Map } from "react-native-feather";
import ListItem from "../components/ListItem";

const EventDetailScreen = () => {
  const { userInfo, user } = useAuth();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { location, event, isComingFromHome } = params;

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let unsub;
    const fetchActivities = async () => {
      try {
        // checks if user has already passed a profile
        unsub = onSnapshot(
          query(
            collection(
              db,
              "locations",
              location.id,
              "events",
              event.id,
              "activities"
            )
          ),
          (snapshot) => {
            setActivities(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          }
        );
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchActivities();
    return unsub;
  }, []);

  return (
    <>
      {user?.role === "organizer" ? (
        <SafeAreaView>
          <ProfileHeader />
          <Header
            title={`Welcome to ${event.title}`}
            subtitle={`${event.description} at ${event.time}`}
            hasBackButton={true}
          />
          <Image source={{ uri: event.photoUrl }} style={styles.image} />
          <Header
            title="Activities"
            subtitle={
              activities.length > 0
                ? `This event has ${activities.length} ${
                    activities.length === 1 ? "activity" : "activities"
                  }`
                : "There are no activities for this event add some!"
            }
            rightComponent={
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  padding: 16,
                  borderRadius: 4,
                  marginHorizontal: 16,
                }}
                onPress={() =>
                  navigation.navigate("ActivityManage", {
                    location: location,
                    event: event,
                  })
                }
              >
                <Plus
                  color={"#000"}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            }
          />
          <FlatList
            data={activities}
            renderItem={({ item }) => (
              <>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.activityButton}
                    onPress={() =>
                      navigation.navigate("ActivityManage", {
                        location: location,
                        event: event,
                        activity: item,
                      })
                    }
                  >
                    <Text>Edit</Text>
                  </TouchableOpacity>
                </View>
                <ListItem
                  title={item.title}
                  description={item.description}
                  time={item.time}
                  photoUrl={item.photoUrl}
                />
              </>
            )}
            keyExtractor={(item) => item.id + "organizing"}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <ProfileHeader />
          <Header
            title={`Welcome to ${event.title}`}
            subtitle={`${event.description} at ${event.time}`}
            hasBackButton={true}
            rightComponent={
              <>
                {isComingFromHome && (
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        "Je gaat nu naar de kaart",
                        "Weet je zeker dat je naar de kaart wilt gaan? Je krijgt een kaart te zien met de locaties van de activiteiten.",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: () =>
                              navigation.navigate("Map", {
                                event: event,
                                location: location,
                              }),
                          },
                        ]
                      );
                    }}
                  >
                    <Map
                      color={"#000"}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </TouchableOpacity>
                )}
                {!isComingFromHome && (
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        "Info over inchecken",
                        "Weet je zeker dat je wilt inchecken? Je krijgt een QR code te zien die je moet scannen bij de ingang van het evenement.",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: () =>
                              navigation.navigate("Scan", {
                                event: event,
                                location: location,
                              }),
                          },
                        ]
                      );
                    }}
                  >
                    <Maximize
                      color={"#000"}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </TouchableOpacity>
                )}

                {/* Render map screen or related components here */}
              </>
            }
          />
          <Image source={{ uri: event.photoUrl }} style={styles.image} />
          <Header
            title="Activities"
            subtitle={
              activities.length > 0
                ? `This event has ${activities.length} ${
                    activities.length === 1 ? "activity" : "activities"
                  }`
                : "There are no activities for this event yet!"
            }
          />
          <FlatList
            data={activities}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                description={item.description}
                time={item.time}
                photoUrl={item.photoUrl}
                onPress={() =>
                  navigation.navigate("ActivityDetail", {
                    location: location,
                    event: event,
                    activity: item,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id + "attending"}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 16,
    borderTopWidth: 1,
    paddingVertical: 8,
    borderTopColor: "#ccc",
  },
  activityButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 4,
    marginHorizontal: 16,
    alignItems: "center",
  },
});
