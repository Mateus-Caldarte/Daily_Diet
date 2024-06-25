import { NewMealProps } from "./Models";
import { NewMealView } from "./view";

export const NewMeal = ({ navigation }: NewMealProps) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return <NewMealView handleGoBack={handleGoBack} />;
};
