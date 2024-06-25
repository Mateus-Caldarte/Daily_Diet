import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const MealItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const TimeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
  flex: 1;
`;

export const StatusIndicator = styled.View<{ status: "success" | "error" }>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ status, theme }) =>
    status === "success" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  margin-left: 8px;
`;

export const Separator = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: 16px;
  margin-left: 8px;
`;
