import { Button, View } from "react-native";
import React from "react";
import { useTheme } from "styled-components";
import style from "../../storybook/stories/CenterView/style";

type Props = {
  width: number;
  height: number;
  onPress?: () => void;
  content: string;
  disabled?: boolean;
};

function SMButton({ onPress, content, disabled, width, height }: Props) {
  const theme = useTheme();

  return (
    <View
      style={{
        width: width ?? 50,
        height: height ?? 30,
        backgroundColor: theme.primary,
        borderRadius: 30
      }}
    >
      <Button
        onPress={onPress ? onPress : () => {}}
        title={content}
        color={"#fff"}
        disabled={disabled}
      />
    </View>
  );
}

export default SMButton;
