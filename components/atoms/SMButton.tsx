import { Button } from "react-native";
import React from "react";
type Props = {
  width: number;
  height: number;
  onPress?: () => void;
  content: string;
};

export default function ({ onPress, content }: Props) {
  return <Button onPress={onPress ? onPress : () => {}} title={content} />;
}
