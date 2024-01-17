import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { MessageCircle, Star, Heart, XCircle } from "react-native-feather";

import useAuth from "../hooks/useAuth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { userInfo, signOut, user } = useAuth();
  const [events, setEvents] = useState([]);

  useLayoutEffect(() => {
    const unsub = onSnapshot(doc(db, "users", userInfo.uid), (snapshot) => {
      if (!snapshot.exists()) {
        navigation.navigate("Modal");
      }
    });
    return unsub;
  }, []);

  const getAttendingEvents = async () => {
    try {
      const eventsRef = collection(
        db,
        "users",
        userInfo.uid,
        "attendingEvents"
      );
      const q = query(eventsRef);
      const querySnapshot = await getDocs(q);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });

      // get the actual event data
      const eventsData = [];
      for (const event of events) {
        const eventRef = doc(
          db,
          "locations",
          event.locationId,
          "events",
          event.id
        );
        const eventSnap = await getDoc(eventRef);
        eventsData.push(eventSnap.data());
      }
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getAttendingEvents();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Start Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileImageButton}
          onPress={() => {
            navigation.navigate("Modal");
          }}
        >
          <Image
            source={{ uri: userInfo?.photoURL }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoButton}
          onPress={() => {
            signOut();
          }}
        >
          <Image
            source={{
              uri: "https://mirri.link/HisRdM1",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* End Header */}
      {user?.role === "organizer" ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Welcome to the organizer home screen
          </Text>
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Welcome to the attendee home screen
          </Text>
          <Text>
            {events.length > 0
              ? "You are attending the following events"
              : "You are not attending any events"}
          </Text>
          <View>
            {events.map((event) => (
              <View key={event.title}>
                <Text>{event.title}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileImageButton: {
    position: "absolute",
    left: -5,
    top: 3,
  },
  profileImage: {
    marginLeft: 16,
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  logoButton: {},
  logo: {
    width: 64,
    height: 48,
  },
  chatButton: {
    position: "absolute",
    right: 8,
    top: 3,
  },
});
