import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  View,
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
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView from "react-native-maps";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";

const EventScreen = () => {
  const [events, setEvents] = useState([]);
  const { params } = useRoute();
  const { locationId } = params;
  useEffect(() => {
    let unsub;
    const fetchEvents = async () => {
      try {
        // checks if user has already passed a profile
        unsub = onSnapshot(
          query(collection(db, "locations", locationId, "events")),
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

  const { userInfo, user } = useAuth();
  const navigation = useNavigation();
  return (
    <>
      {user?.role === "organizer" ? (
        <SafeAreaView>
          <Text>organizer event screen</Text>
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <View style={styles.eventItem}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.eventButton}
                    onPress={() =>
                      navigation.navigate("Qr", {
                        event: item,
                        locationId,
                      })
                    }
                  >
                    <Text>Qr</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.eventButton}
                    onPress={() =>
                      navigation.navigate("EventDetail", {
                        eventId: item.id,
                        locationId,
                      })
                    }
                  >
                    <Text>EventDetail</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <Text>attendee event screen</Text>
          <FlatList
            data={events}
            renderItem={({ item }) => (
              <View style={styles.eventItem}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.eventButton}
                    onPress={() =>
                      navigation.navigate("Scan", {
                        event: item,
                      })
                    }
                  >
                    <Text>Scan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
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
  },
  eventButton: {
    backgroundColor: "#e3e3e3",
    padding: 16,
    borderRadius: 4,
    margin: 8,
  },
});
