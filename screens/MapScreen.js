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
import MapView, { Marker } from "react-native-maps";

import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";

const MapScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { userInfo, user } = useAuth();
  const { params } = useRoute();
  const { location, event } = params;
  const [activities, setActivities] = useState([]);

  const getActivitiesForEvents = async () => {
    try {
      const eventsRef = collection(
        db,
        "locations",
        location.id,
        "events",
        event.id,
        "activities"
      );
      const q = query(eventsRef);
      const querySnapshot = await getDocs(q);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });
      setActivities(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getActivitiesForEvents();
  }, []);

  useEffect(() => {
    if (isFocused) {
      getActivitiesForEvents();
    }
  }, [isFocused]);

  console.log(activities);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader />
      <>
        <Header
          title={`${event.title} Map`}
          subtitle={"All activities for this event are shown below"}
        />
        <MapView style={{ flex: 1 }}>
          {activities.map((activity, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(activity.location.latitude),
                longitude: parseFloat(activity.location.longitude),
              }}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </MapView>
      </>
    </SafeAreaView>
  );
};

export default MapScreen;
