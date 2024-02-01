import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const EventAnalyticScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { userInfo, user } = useAuth();
  const { params } = useRoute();
  const { locationId, event } = params;
  const [attendees, setAttendees] = useState([]);

  const getAttendeesForEvents = async () => {
    try {
      const eventsRef = collection(
        db,
        "locations",
        locationId,
        "events",
        event.id,
        "attendees"
      );
      const q = query(eventsRef);
      const querySnapshot = await getDocs(q);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });
      setAttendees(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getAttendeesForEvents();
  }, []);

  useEffect(() => {
    if (isFocused) {
      getAttendeesForEvents();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader />
      <>
        <Header
          title={`${event.title} Analytics,`}
          subtitle={"These are all users which have checked in to your event."}
        />
        <FlatList
          data={attendees}
          renderItem={({ item }) => (
            <ListItem
              title={item?.displayName}
              photoUrl={item.photoURL}
              description={"user has checked in for event at"}
              time={item.timestamp.toDate().toLocaleString()}
            />
          )}
          keyExtractor={(item) => item.id + "organizing"}
        />
      </>
    </SafeAreaView>
  );
};

export default EventAnalyticScreen;
