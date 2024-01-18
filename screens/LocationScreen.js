import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
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
        // checks if user has already passed a profile
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

  const { userInfo, user } = useAuth();
  console.log("user", user);
  const navigation = useNavigation();
  return (
    <>
      {user?.role === "organizer" ? (
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
      ) : (
        <SafeAreaView>
          <ProfileHeader />
          <Header title="Choose a location" subtitle="All current zuyd locations"/>
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
      )}
    </>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {},
  locationItem: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#eee",
  },
});
