import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { userInfo, user } = useAuth();
  const [attendingEvents, setAttendingEvetns] = useState([]);
  const [organizingEvents, setOrganizingEvents] = useState([]);

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
      setAttendingEvetns(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const getOrganizingEvents = async () => {
    try {
      const eventsRef = collection(
        db,
        "users",
        userInfo.uid,
        "organizingEvents"
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
      setOrganizingEvents(eventsData);
      console.log(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getOrganizingEvents();
    getAttendingEvents();
  }, []);

  useEffect(() => {
    if (isFocused) {
      {
        user?.role === "organizer"
          ? getOrganizingEvents()
          : getAttendingEvents();
      }
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader />
      {user?.role === "organizer" ? (
        <>
          <Header
            title={`Welcome ${userInfo.displayName},`}
            subtitle={
              organizingEvents.length === 0
                ? "U are not organizing any events yet."
                : `U are organizing ${organizingEvents.length} events.`
            }
          />
          <FlatList
            data={organizingEvents}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time}
                photoUrl={item.photoUrl}
              />
            )}
            keyExtractor={(item) => item.id + "organizing"}
          />
        </>
      ) : (
        <>
          <Header
            title={`Welcome ${userInfo.displayName},`}
            subtitle={
              attendingEvents.length === 0
                ? "U are not attending any events yet."
                : `U are attending ${attendingEvents.length} events.`
            }
          />
          <FlatList
            data={attendingEvents}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time}
                photoUrl={item.photoUrl}
              />
            )}
            keyExtractor={(item) => item.id + "attending"}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
