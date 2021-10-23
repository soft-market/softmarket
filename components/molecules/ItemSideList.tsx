import { View } from "react-native";
import styled from "styled-components/native";
import SMText from "../atoms/SMText";

type Props = {
  title: string;
};

export default function ({ title }: Props) {
  return (
    <ItemSideWrapper>
      <SMText>{title}</SMText>
    </ItemSideWrapper>
  );
}

const ItemSideWrapper = styled(View)`
  width: 100%;
  height: 80px;
`;
