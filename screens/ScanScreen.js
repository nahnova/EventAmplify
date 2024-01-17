import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  doc,
  serverTimestamp,
  setDoc,
  collection,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const ScanScreen = () => {
  const navigation = useNavigation();
  const { userInfo, user } = useAuth();
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
      await setDoc(eventRef, {
        id: userInfo.uid,
        displayName: userInfo.displayName,
        photoURL: userInfo.photoURL,
        timestamp: serverTimestamp(),
      });
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
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
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
