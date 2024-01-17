import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ModalScreen from "./screens/ModalScreen";
import useAuth from "./hooks/useAuth";
import ScanScreen from "./screens/ScanScreen";
import EventDetailScreen from "./screens/EventDetailScreen";
import EventScreen from "./screens/EventScreen";
import LocationScreen from "./screens/LocationScreen";
import QrScreen from "./screens/QrScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  const { userInfo, user } = useAuth();

  return (
    <>
      {userInfo ? (
        <>
          {user?.role === "organizer" ? (
            //NOTE: TAB NAVIGATOR FOR organizer
            <Tab.Navigator>
              <Tab.Group screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Start">
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
                <Tab.Screen name="Events">
                  {() => (
                    <Stack.Navigator>
                      {/* Flow should be --> Location Select ---> Events Create ---> Event Details */}
                      <Stack.Group>
                        <Stack.Screen
                          name="Location"
                          component={LocationScreen}
                        />
                        <Stack.Screen name="Event" component={EventScreen} />
                        <Stack.Screen
                          name="EventDetail"
                          component={EventDetailScreen}
                        />
                      </Stack.Group>
                      <Stack.Group
                        screenOptions={{
                          presentation: "modal",
                          headerShown: false,
                        }}
                      >
                        <Stack.Screen name="Qr" component={QrScreen} />
                      </Stack.Group>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Group>
            </Tab.Navigator>
          ) : (
            //NOTE: TAB NAVIGATOR FOR attendee
            <Tab.Navigator>
              <Tab.Group screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Start">
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
                <Tab.Screen name="Events">
                  {() => (
                    <Stack.Navigator>
                      {/* Flow should be --> Events List ---> Event Pre Details --> Scan Event QR ---> See Entire Event(Map, Activities, etc) */}
                      <Stack.Group>
                        <Stack.Screen
                          name="Location"
                          component={LocationScreen}
                        />
                        <Stack.Screen name="Event" component={EventScreen} />
                        <Stack.Screen name="Scan" component={ScanScreen} />
                        <Stack.Screen
                          name="EventDetail"
                          component={EventDetailScreen}
                        />
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
