import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const ProfileHeader = () => {
  const navigation = useNavigation();
  const { userInfo, signOut } = useAuth();

  return (
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
    </View>
  );
};

export default ProfileHeader;

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
