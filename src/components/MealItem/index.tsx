import React from "react";
import {
  MealItem,
  TimeText,
  DescriptionText,
  StatusIndicator,
  Separator,
} from "./styles";

type Props = {
  time: string;
  description: string;
  status: "success" | "error";
  onPress: () => void;
};

export const MealItemDaily = ({
  time,
  description,
  status,
  onPress,
}: Props) => {
  return (
    <MealItem onPress={onPress}>
      <TimeText>{time}</TimeText>
      <Separator>|</Separator>
      <DescriptionText>{description}</DescriptionText>
      <StatusIndicator status={status} />
    </MealItem>
  );
};
