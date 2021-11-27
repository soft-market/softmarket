import { View, Image, ImageURISource } from "react-native";
import styled from "styled-components/native";
import SMText from "../atoms/SMText";
import React from "react";

type Props = {
  title: string;
  image: ImageURISource | null;
};

export default function ({ title, image }: Props) {
  return (
    <ItemSideWrapper>
      <ItemImage source={image ?? require("../../assets/images/default.png")} />
      <ItemText>{title}</ItemText>
    </ItemSideWrapper>
  );
}

const ItemSideWrapper = styled(View)`
  padding: 10px;
`;

const ItemText = styled(SMText)``;
const ItemImage = styled(Image)`
  width: 150px;
  height: 150px;
`;
