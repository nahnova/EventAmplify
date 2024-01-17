import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";

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
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}>Locations</Text>
          <FlatList
            data={locations}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.locationItem}
                onPress={() =>
                  navigation.navigate("Event", {
                    locationId: item.id,
                  })
                }
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}>attendee location screen</Text>
          <FlatList
            data={locations}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.locationItem}
                onPress={() =>
                  navigation.navigate("Event", {
                    locationId: item.id,
                  })
                }
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
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
