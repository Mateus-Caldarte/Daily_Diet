import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsRootStack } from "@routes/Models";

export interface HomeScreenProps
  extends NativeStackScreenProps<PropsRootStack, "home"> {}

export interface HomeScreenViewProps {
  getCurrentTime: () => string;
  getCurrentDateFormatted: () => string;
  handleNewMeal: () => void;
}
