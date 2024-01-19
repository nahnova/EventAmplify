import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { CheckSquare } from "react-native-feather";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

const ActivityDetailScreen = () => {
  const { userInfo } = useAuth();
  const { params } = useRoute();
  const { location, event, activity } = params;

  const SignupForActivity = async () => {
    const ref = doc(
      db,
      "locations",
      location.id,
      "events",
      event.id,
      "activities",
      activity.id,
      "attendees",
      userInfo.uid
    );
    const activitySnap = await getDoc(ref);
    if (activitySnap.exists()) {
      alert(`You have already signed up for ${activity.title}, view the activity in your home screen`);
    } else {
      // add user to attendees from the activity list in firestore
      await setDoc(ref, {
        id: userInfo.uid,
        displayName: userInfo.displayName,
        photoURL: userInfo.photoURL,
        timestamp: serverTimestamp(),
      });
      // add event to user events list in firestore (for easy access)
      await setDoc(
        doc(db, "users", userInfo.uid, "attendingActivities", activity.id),
        {
          id: activity.id,
          eventId: event.id,
          locationId: location.id,
          activity,
          event,
          location,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );
      alert(`You have signed up for ${activity.title}, view the activity in your home screen`);
    }
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <ProfileHeader />
      {activity && event && location && (
        <>
          <Header
            title={`${activity.title}`}
            subtitle={`This activity is from ${event.title}`}
            hasBackButton={true}
            rightComponent={
              <TouchableOpacity
                style={{
                  marginRight: 16,
                }}
                onPress={() => {
                  // TODO add signup for event functionality
                  Alert.alert(
                    "Wil je je aanmelden",
                    "Weet je zeker dat je je wilt aanmelden voor deze activiteit? De organisator van deze activiteit zal een melding krijgen dat je je aansluit",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("cancel"),
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => SignupForActivity() 
                      },
                    ]
                  );
                }}
              >
                <CheckSquare color="#000000" width={24} height={24} />
              </TouchableOpacity>
            }
          />
          <ScrollView style={styles.container}>
            <Image source={{ uri: activity.photoUrl }} style={styles.image} />
            <View style={styles.innerContainer}>
              <Text style={styles.childComponent}>{activity.description}</Text>
              <Text style={styles.childComponent}>
                <Text style={{ fontWeight: "bold" }}>Starttijd:</Text>{" "}
                {activity.time}
              </Text>
              <Text style={styles.childComponent}>
                <Text style={{ fontWeight: "bold" }}>Route:</Text>{" "}
                {activity.location.route}
              </Text>
              <Text style={styles.childComponent}>
                <Text style={{ fontWeight: "bold" }}>Room:</Text>{" "}
                {activity.location.room}
              </Text>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default ActivityDetailScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },

  image: {
    width: "100%",
    height: 150,
  },

  innerContainer: {
    display: "flex",
    padding: 16,
    backgroundColor: "#fff",
  },
  childComponent: {
    marginVertical: 10, // Voegt verticale marge toe tussen de componenten
    fontSize: 16,
  },
});
