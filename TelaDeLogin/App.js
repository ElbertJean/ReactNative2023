import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screens/Home";

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"  
                screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;