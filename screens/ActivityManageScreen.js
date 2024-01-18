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

const ActivityManageScreen = () => {
  const { userInfo } = useAuth();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { location, event, activity } = params;

  // event properties to be updated or created
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [time, setTime] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [room, setRoom] = useState(null);
  const [route, setRoute] = useState(null);

  const incompleteActivity =
    !title ||
    !description ||
    !photoUrl ||
    !time ||
    !latitude ||
    !longitude ||
    !room ||
    !route;

  const updateOrCreateActivity = () => {
    // if event.id exists, update event else create new event
    const activitiesCollectionRef = collection(
      db,
      "locations",
      location.id,
      "events",
      event.id,
      "activities"
    );

    const eventPayload = {
      title: title,
      description: description,
      photoUrl: photoUrl,
      timestamp: serverTimestamp(),
      location: {
        latitude: latitude,
        longitude: longitude,
        room: room,
        route: route,
      },
      time: time,
      timestamp: serverTimestamp(),
    };

    if (activity?.id) {
      const eventDocRef = doc(activitiesCollectionRef, activity.id);
      setDoc(eventDocRef, eventPayload)
        .then(() => {
          console.log("Document successfully written!");
          Alert.alert(
            "Activity successfully updated! U may now close this modal 🎉"
          );
          navigation.goBack();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      addDoc(activitiesCollectionRef, eventPayload)
        .then(() => {
          console.log("Document successfully added!");
          Alert.alert(
            "Activity successfully added! U may now close this modal 🎉"
          );
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  const getActivity = async () => {
    const docRef = doc(
      db,
      "locations",
      location.id,
      "events",
      event.id,
      "activities",
      activity.id
    );
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { title, description, photoUrl, time, location } = docSnap.data();
      setTitle(title);
      setDescription(description);
      setPhotoUrl(photoUrl);
      setTime(time);
      setLatitude(location.latitude);
      setLongitude(location.longitude);
      setRoom(location.room);
      setRoute(location.route);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getActivity();
  }, [activity]);

  return (
    <View style={styles.modalContainer}>
      <Header title={activity?.id ? "Update Activity" : "Create Activity"} />
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.modalTitle}>Title</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity title"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.modalTitle}>Description</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity description"
          value={description}
          onChangeText={setDescription}
        />
        <Text style={styles.modalTitle}>Photo URL</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity photo URL"
          value={photoUrl}
          onChangeText={setPhotoUrl}
        />
        <Text style={styles.modalTitle}>Time</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity time"
          value={time}
          onChangeText={setTime}
        />
        <Text style={styles.modalTitle}>Latitude</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity latitude"
          value={latitude}
          onChangeText={setLatitude}
        />
        <Text style={styles.modalTitle}>Longitude</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity longitude"
          value={longitude}
          onChangeText={setLongitude}
        />
        <Text style={styles.modalTitle}>Room</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity room"
          value={room}
          onChangeText={setRoom}
        />
        <Text style={styles.modalTitle}>Route</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Enter the activity route"
          value={route}
          onChangeText={setRoute}
        />
        <TouchableOpacity
          style={[
            styles.modalButton,
            { opacity: incompleteActivity ? 0.3 : 1 },
          ]}
          onPress={updateOrCreateActivity}
          disabled={incompleteActivity}
        >
          <Text style={styles.modalButtonText}>
            {activity?.id ? "Update Activity" : "Create Activity"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ActivityManageScreen;

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
    marginTop: 16,
    bottom: 0,
  },
  modalButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
