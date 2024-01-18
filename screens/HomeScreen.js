import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
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

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { userInfo, user } = useAuth();
  const [attendingEvents, setAttendingEvents] = useState([]);
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
      setAttendingEvents(events);
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
      setOrganizingEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getOrganizingEvents();
    getAttendingEvents();
    console.log(attendingEvents);
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
              // TODO: should be able to view event analytics here
              <ListItem
                title={item?.event?.title}
                description={item?.event?.description}
                date={item?.event?.date}
                time={item?.event?.time}
                photoUrl={item?.event?.photoUrl}
                onPress={() =>
                  navigation.navigate("EventManage", {
                    event: item.event,
                    location: item.location,
                  })
                }
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
                title={item.event.title}
                description={item.event.description}
                date={item.event.date}
                time={item.event.time}
                photoUrl={item.event.photoUrl}
                onPress={() =>
                  navigation.navigate("EventDetail", {
                    event: item.event,
                    location: item.location,
                  })
                }
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
