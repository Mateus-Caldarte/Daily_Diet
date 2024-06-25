import {
  Container,
  Header,
  Logo,
  MealPercentageArea,
  PercentageArea,
  PercentageAreaDecined,
  Percentage,
  PercentageDescription,
  LogoOpen,
  TextMeals,
  ButtonArea,
  TextButton,
  IconAdd,
  DateMeal,
} from "./styles";
import { HomeScreenViewProps } from "./Models";
import logo from "@assets/logo.png";
import hacker from "@assets/hacker.png";
import open from "@assets/open.png";
import openDeclined from "@assets/openDeclined.png";
import add from "@assets/add.png";
import { MealItemDaily } from "@components/MealItem";
import { FlatList } from "react-native";

export const HomeScreenView = ({
  getCurrentTime,
  getCurrentDateFormatted,
  handleNewMeal,
}: HomeScreenViewProps) => {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Logo source={hacker} />
      </Header>
      <MealPercentageArea>
        <PercentageArea onPress={() => {}}>
          <LogoOpen source={open} />
          <Percentage>90,86%</Percentage>
          <PercentageDescription>
            Das refeições dentro da dieta
          </PercentageDescription>
        </PercentageArea>
        <PercentageAreaDecined>
          <LogoOpen source={openDeclined} />
          <Percentage>9,14%</Percentage>
          <PercentageDescription onPress={() => {}}>
            Das refeições dentro da dieta
          </PercentageDescription>
        </PercentageAreaDecined>
      </MealPercentageArea>
      <TextMeals>Refeições</TextMeals>
      <ButtonArea onPress={handleNewMeal}>
        <IconAdd source={add} />
        <TextButton>Nova refeição</TextButton>
      </ButtonArea>
      <DateMeal>{getCurrentDateFormatted()}</DateMeal>
      <MealItemDaily
        onPress={() => {}}
        status="success"
        description="X-Bacon"
        time={getCurrentTime()}
      />
    </Container>
  );
};
