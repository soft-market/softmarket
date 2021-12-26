import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import React from "react";
type ComponentWithChildProps = React.PropsWithChildren<Props>;

type Props = {
  isPressable?: boolean;
  onPress?: () => void;
  fontSize?: number;
  fontColor?: string;
};

export default function (props: ComponentWithChildProps) {
  if (props.isPressable) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <CustomText fontSize={props.fontSize} fontColor={props.fontColor}>
          {props.children}
        </CustomText>
      </TouchableOpacity>
    );
  } else {
    return (
      <CustomText fontSize={props.fontSize} fontColor={props.fontColor}>
        {props.children}
      </CustomText>
    );
  }
}

const CustomText = styled(Text)<{ fontColor?: string; fontSize?: number }>`
  color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 12)}px;
`;
