import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { promptAsync } = useAuth();
  return (
    <LinearGradient
      colors={["#000", "#333334", "#fff"]}
      style={styles.container}
    >
      <Image
        source={{
          uri: "https://mirri.link/Vn1yD4P",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => {
          promptAsync();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { width: 200, height: 200 },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    fontFamily: "Helvetica Neue",
    fontSize: 16,
    fontWeight: "bold",    
    marginHorizontal: 48,
  },
});
