import React, { createContext, useContext, useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut as signOutFirebase,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
        console.log("User is signed in");
      } else {
        setUserInfo(null);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  const config = {
    androidClientId:
      "1094590548812-71iqdl1cnndl8r5re9ug98ijfhk281om.apps.googleusercontent.com",
    iosClientId:
      "1094590548812-akttfprlalvea6el15v9hgv6psrho0o7.apps.googleusercontent.com",
    expoClientId:
      "1094590548812-mvsut460hl5bdu68m2k4i83kgbe262b9.apps.googleusercontent.com",
    useProxy: true,
    projectNameForProxy: "@noaheutz/EventAmplify",
  };

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const signInWithGoogle = async () => {
    try {
      // Attempt to retrieve user information from AsyncStorage
      const userJSON = await AsyncStorage.getItem("user");
      if (userJSON) {
        // If user information is found in AsyncStorage, parse it and set it in the state
        setUserInfo(JSON.parse(userJSON));
      } else if (response?.type === "success") {
        // Create a Firebase credential with the AccessToken
        const credential = GoogleAuthProvider.credential(
          response?.authentication?.idToken,
          response?.authentication?.accessToken
        );
        // Sign-in the user with the credential
        await signInWithCredential(auth, credential);
        console.log("User successfully signed in to Firebase!");
      }
    } catch (error) {
      // Handle any errors that occur during AsyncStorage retrieval or other operations
      console.error("Error retrieving user data from AsyncStorage:", error);
    }
  };

  const signOut = async () => {
    // Remove the user from the state
    setUserInfo(null);
    // Sign-out the user from Firebase
    await signOutFirebase().catch((error) => {
      console.error("Error signing out:", error);
    });
    // Remove the user from AsyncStorage
    await AsyncStorage.removeItem("user");
  };

  //add it to a useEffect with response as a dependency
  useEffect(() => {
    signInWithGoogle();
  }, [response]);
  
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        promptAsync, // Make sure promptAsync is included in the context value
        signOut, // Make sure signOut is included in the context value
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
