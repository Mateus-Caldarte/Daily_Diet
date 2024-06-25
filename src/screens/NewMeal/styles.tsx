import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 18%;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
  text-align: center;
  flex: 1;
`;

export const Logo = styled.Image`
  margin-right: auto;
`;

export const LogoTouchable = styled(TouchableOpacity)`
  margin-right: auto;
`;
