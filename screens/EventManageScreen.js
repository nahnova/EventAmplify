import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import Header from "../components/Header";

// TODO: add query to save event to user's organizingEvents collection

const EventManageScreen = () => {
  const { userInfo } = useAuth();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { locationId, event } = params;

  // event properties to be updated or created
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const incompleteEvent = !title || !description || !photoUrl || !date || !time;

  const updateOrCreateEvent = () => {
    // if event.id exists, update event else create new event
    const eventsCollectionRef = collection(
      db,
      "locations",
      locationId,
      "events"
    );

    const eventPayload = {
      title: title,
      description: description,
      photoUrl: photoUrl,
      timestamp: serverTimestamp(),
      organizer: userInfo.uid,
      date: date,
      time: time,
      timestamp: serverTimestamp(),
    };

    if (event?.id) {
      const eventDocRef = doc(eventsCollectionRef, event.id);
      setDoc(eventDocRef, eventPayload)
        .then(() => {
          console.log("Document successfully written!");
          Alert.alert(
            "Event successfully updated! U may now close this modal, the event will also be evailable at the home screen for analytics 🎉"
          );
          navigation.goBack();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      setDoc(
        doc(db, "users", userInfo.uid, "organizingEvents", event.id),
        {
          id: event.id,
          locationId: locationId,
          event,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );
    } else {
      addDoc(eventsCollectionRef, eventPayload)
        .then(() => {
          console.log("Document successfully added!");
          Alert.alert(
            "Event successfully added! U may now close this modal 🎉"
          );
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  const getEvent = async () => {
    const docRef = doc(db, "locations", locationId, "events", event?.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { title, description, photoUrl, date, time } = docSnap.data();
      setTitle(title);
      setDescription(description);
      setPhotoUrl(photoUrl);
      setDate(date);
      setTime(time);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getEvent();
  }, [event]);

  return (
    <View style={styles.modalContainer}>
      <Header title={event?.id ? "Update Event" : "Create Event"} />
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.modalTitle}>Title</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the event title"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.modalTitle}>Description</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the event description"
          value={description}
          onChangeText={setDescription}
        />
        <Text style={styles.modalTitle}>Photo URL</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the event photo URL"
          value={photoUrl}
          onChangeText={setPhotoUrl}
        />
        <Text style={styles.modalTitle}>Date</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the event date"
          value={date}
          onChangeText={setDate}
        />
        <Text style={styles.modalTitle}>Time</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the event time"
          value={time}
          onChangeText={setTime}
        />
      </ScrollView>
      <TouchableOpacity
        style={[styles.modalButton, { opacity: incompleteEvent ? 0.3 : 1 }]}
        onPress={updateOrCreateEvent}
        disabled={incompleteEvent}
      >
        <Text style={styles.modalButtonText}>
          {event?.id ? "Update Event" : "Create Event"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventManageScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 16,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
  },
  formContainer: {
    alignSelf: "stretch",
  },
  modalTitle: {
    textAlign: "left",
    paddingVertical: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  modalInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    width: "100%",
  },
  modalButton: {
    width: "100%",
    padding: 16,
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
  },
  modalButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
