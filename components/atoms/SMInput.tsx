import React from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components";
type ComponentWithChildProps = React.PropsWithChildren<Props>;

type Props = {
  width?: number;
  height?: number;
  onPress?: () => void;
  placeholder?: string;
};

export default function (props: ComponentWithChildProps) {
  const theme = useTheme();
  return (
    <TextInput
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
      placeholder={props.placeholder}
    />
  );
}
