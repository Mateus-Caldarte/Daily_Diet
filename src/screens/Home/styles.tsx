import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Logo = styled.Image``;

export const LogoOpen = styled.Image`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const MealPercentageArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  height: 14%;
`;

export const PercentageArea = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGTH};
  justify-content: center;
  align-items: center;
  width: 49%;
  border-radius: 10px;
`;

export const PercentageAreaDecined = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGTH};
  justify-content: center;
  align-items: center;
  width: 49%;
  border-radius: 10px;
`;

export const Percentage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PercentageDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XSMALL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 10px;
`;

export const TextMeals = styled.Text`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ButtonArea = styled(TouchableOpacity)`
  width: 100%;
  margin-top: 16px;
  height: 7%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 16px;
`;
export const IconAdd = styled.Image`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const DateMeal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 5px;
`;
