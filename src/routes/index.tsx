import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropsRootStack } from "./Models";
import { HomeScreen } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";

const Stack = createNativeStackNavigator<PropsRootStack>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="newMeal"
        component={NewMeal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
