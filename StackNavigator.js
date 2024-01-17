import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ModalScreen from "./screens/ModalScreen";
import useAuth from "./hooks/useAuth";
import ScanScreen from "./screens/ScanScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  const { userInfo } = useAuth();

  return (
    <>
      {userInfo ? (
        <>
          {userInfo.role === "admin" ? (
            // TAB NAVIGATOR FOR ADMIN
            <Tab.Navigator>
              <Tab.Group screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home">
                  {() => (
                    <Stack.Navigator>
                      <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                      </Stack.Group>
                      <Stack.Group
                        screenOptions={{
                          presentation: "modal",
                          headerShown: false,
                        }}
                      >
                        <Stack.Screen name="Modal" component={ModalScreen} />
                      </Stack.Group>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Group>
            </Tab.Navigator>
          ) : (
            // TAB NAVIGATOR FOR USER
            <Tab.Navigator>
              <Tab.Group screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home">
                  {() => (
                    <Stack.Navigator>
                      <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                      </Stack.Group>
                      <Stack.Group
                        screenOptions={{
                          presentation: "modal",
                          headerShown: false,
                        }}
                      >
                        <Stack.Screen name="Modal" component={ModalScreen} />
                      </Stack.Group>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen name="Scan">
                  {() => (
                    <Stack.Navigator>
                      <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Scan" component={ScanScreen} />
                      </Stack.Group>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Group>
            </Tab.Navigator>
          )}
        </>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default StackNavigator;
