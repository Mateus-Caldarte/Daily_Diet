import { HomeScreenProps } from "./Models";
import { HomeScreenView } from "./view";

export const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const formattedTime = formattedHours + ":" + formattedMinutes;

    return formattedTime;
  };

  const getCurrentDateFormatted = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear().toString().slice(-2);

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    return `${formattedDay}.${formattedMonth}.${year}`;
  };

  const handleNewMeal = () => {
    navigation.navigate("newMeal");
  };

  return (
    <>
      <HomeScreenView
        getCurrentTime={getCurrentTime}
        getCurrentDateFormatted={getCurrentDateFormatted}
        handleNewMeal={handleNewMeal}
      />
    </>
  );
};
