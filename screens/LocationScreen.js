import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import ListItem from "../components/ListItem";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";

const LocationScreen = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    let unsub;
    const fetchLocations = async () => {
      try {
        // get all locations from firestore
        unsub = onSnapshot(query(collection(db, "locations")), (snapshot) => {
          setLocations(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
    return unsub;
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ProfileHeader />
      <Header title="Choose a location" subtitle="All current zuyd locations" />
      <FlatList
        data={locations}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            photoUrl={item.photoUrl}
            onPress={() =>
              navigation.navigate("Event", {
                location: item,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default LocationScreen;
