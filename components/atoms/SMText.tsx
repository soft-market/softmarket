import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

type ComponentWithChildProps = React.PropsWithChildren<Props>;

type Props = {
  isPressable?: boolean;
  width?: number;
  height?: number;
  onPress?: () => void;
};

export default function (props: ComponentWithChildProps) {
  if (props.isPressable) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <CustomText>{props.children}</CustomText>
      </TouchableOpacity>
    );
  } else {
    return <CustomText>{props.children}</CustomText>;
  }
}

const CustomText = styled(Text)<{ fontColor?: string; fontSize?: number }>`
  color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + `px` : "12px")};
`;
