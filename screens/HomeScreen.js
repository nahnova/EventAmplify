import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MessageCircle, Star, Heart, XCircle } from "react-native-feather";

import useAuth from "../hooks/useAuth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { userInfo, signOut } = useAuth();

  useLayoutEffect(() => {
    const unsub = onSnapshot(doc(db, "users", userInfo.uid), (snapshot) => {
      if (!snapshot.exists()) {
        navigation.navigate("Modal");
      }
    });
    return unsub;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Start Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileImageButton}
          onPress={() => {
            navigation.navigate("Modal");
          }}
        >
          <Image
            source={{ uri: userInfo?.photoURL }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoButton}
          onPress={() => {
            signOut();
          }}
        >
          <Image
            source={{
              uri: "https://mirri.link/HisRdM1",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* TODO: add misc button */}
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
          style={styles.rightButton}
        >
          <MessageCircle
            stroke="#000"
            width={32}
            height={32}
            fill="#000"
          />
        </TouchableOpacity> */}
      </View>
      {/* End Header */}
      {/* TODO: Add: events where user is part of attendees and welcome message etc */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileImageButton: {
    position: "absolute",
    left: -5,
    top: 3,
  },
  profileImage: {
    marginLeft: 16,
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  logoButton: {},
  logo: {
    width: 64,
    height: 48,
  },
  chatButton: {
    position: "absolute",
    right: 8,
    top: 3,
  },
});
