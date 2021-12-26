import React from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components";
type ComponentWithChildProps = React.PropsWithChildren<Props>;

type Props = {
  type?: "default" | "numeric" | "email-address";
  width?: number;
  height?: number;
  onChange?: () => void;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

export default function (props: ComponentWithChildProps) {
  const theme = useTheme();

  return (
    <TextInput
      keyboardType={props.type ?? "default"}
      style={{
        width: props.width ?? 200,
        height: props.height ?? 35,
        backgroundColor: theme.colors.a1,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: theme.border,
        paddingLeft: 10,
        margin: 10
      }}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
    />
  );
}
