import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsRootStack } from "@routes/Models";

export interface NewMealProps
  extends NativeStackScreenProps<PropsRootStack, "newMeal"> {}

export interface NewMealViewProps {
  handleGoBack: () => void;
}
