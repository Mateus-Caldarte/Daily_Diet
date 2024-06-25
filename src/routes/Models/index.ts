import { NavigationProp } from "@react-navigation/native";

export type DailyDietRootStack = {
  home: undefined;
  newMeal: undefined;
};

export type PropsRootStack = DailyDietRootStack;

export interface HeaderEncontreProps {
  navigation: NavigationProp<unknown>;
}

export interface TabEncontreProps {
  navigation: NavigationProp<unknown>;
}
