import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProfileHeader from "../components/ProfileHeader";
import Header from "../components/Header";

const ScanScreen = () => {
  const navigation = useNavigation();
  const { userInfo, user } = useAuth();
  const { params } = useRoute();
  const { event, location } = params;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    const { locationId, eventId } = JSON.parse(data);
    const eventRef = doc(
      db,
      "locations",
      locationId,
      "events",
      eventId,
      "attendees",
      userInfo.uid
    );
    const eventSnap = await getDoc(eventRef);
    if (eventSnap.exists()) {
      alert("You have already checked in, view the event in your home screen");
    } else {
      // add user to attendees list in firestore
      await setDoc(eventRef, {
        id: userInfo.uid,
        displayName: userInfo.displayName,
        photoURL: userInfo.photoURL,
        timestamp: serverTimestamp(),
      });
      // add event to user events list in firestore (for easy access)
      await setDoc(
        doc(db, "users", userInfo.uid, "attendingEvents", eventId),
        {
          id: eventId,
          locationId: locationId,
          event,
          location,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );
      alert("Check in successful!, You can view the event in your home screen");
    }
    navigation.navigate("Home");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <Header
        title={`${event.title} check in`}
        subtitle={`scan the qr code to check in`}
        hasBackButton={true}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
