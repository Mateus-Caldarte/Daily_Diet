import { NewMealViewProps } from "./Models";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { Container, Header, Title, Logo, LogoTouchable } from "./styles";
import goBack from "@assets/goBack.png";

export const NewMealView = ({ handleGoBack }: NewMealViewProps) => {
  useEffect(() => {
    StatusBar.setBackgroundColor("#DDDEDF");
    StatusBar.setBarStyle("dark-content", true);

    return () => {
      StatusBar.setBackgroundColor("#FAFAFA");
      StatusBar.setBarStyle("dark-content", true);
    };
  }, []);
  return (
    <>
      <Header>
        <LogoTouchable onPress={handleGoBack}>
          <Logo source={goBack} />
        </LogoTouchable>
        <Title>Nova refeição</Title>
      </Header>
      <Container></Container>
    </>
  );
};
