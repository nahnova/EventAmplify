import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";

const EventDetailScreen = () => {
  const { userInfo, user } = useAuth();
  const navigation = useNavigation();
  return (
    <>
      {user?.role === "organizer" ? (
        <SafeAreaView>
          <Text>organizer event screen</Text>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <Text>attendee event screen</Text>
        </SafeAreaView>
      )}
    </>
  );
};

export default EventDetailScreen;
