import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Plus } from "react-native-feather";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const EventScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const { params } = useRoute();
  const { location } = params;
  useEffect(() => {
    let unsub;
    const fetchEvents = async () => {
      try {
        // checks if user has already passed a profile
        unsub = onSnapshot(
          query(collection(db, "locations", location.id, "events")),
          (snapshot) => {
            setEvents(
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

    fetchEvents();
    return unsub;
  }, []);

  return (
    <>
      {user?.role === "organizer" ? (
        <SafeAreaView>
          <ProfileHeader />
          {location && events && (
            <Header
              title="Manage events"
              subtitle={`location has ${events?.length} ${
                events?.length === 1 ? "event" : "events"
              }`}
              hasBackButton={true}
              rightComponent={
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    padding: 16,
                    borderRadius: 4,
                    marginHorizontal: 16,
                  }}
                  onPress={() =>
                    navigation.navigate("EventManage", {
                      locationId: location.id,
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
          )}
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.eventButton}
                    onPress={() =>
                      navigation.navigate("Qr", {
                        event: item,
                        locationId: location.id,
                      })
                    }
                  >
                    <Text>Qr</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.eventButton}
                    onPress={() =>
                      navigation.navigate("EventManage", {
                        event: item,
                        locationId: location.id,
                      })
                    }
                  >
                    <Text>Edit</Text>
                  </TouchableOpacity>
                </View>
                <ListItem
                  onPress={() =>
                    navigation.navigate("EventDetail", {
                      event: item,
                      location: location,
                    })
                  }
                  title={item.title}
                  description={item.description}
                  date={item.date}
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
            title="Choose a event"
            subtitle={`${location?.name} has ${events?.length} ${
              events?.length === 1 ? "event" : "events"
            }`}
          />
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <>
                <ListItem
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  time={item.time}
                  photoUrl={item.photoUrl}
                  onPress={() =>
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
                              event: item,
                              location: location,
                            }),
                        },
                      ]
                    )
                  }
                />
              </>
            )}
            keyExtractor={(item) => item.id + "organizing"}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  eventItem: {
    flexDirection: "row",
    justifyContent: "space-between", // Add this line
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#eee",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    borderTopWidth: 1,
    paddingVertical: 8,
    borderTopColor: "#ccc",
  },
  eventButton: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 16,
    alignItems: "center",
  },
});
