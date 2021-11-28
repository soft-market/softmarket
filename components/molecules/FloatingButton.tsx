import { View } from "react-native";
import styled from "styled-components/native";
import SMText from "../atoms/SMText";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  onPress: () => void;
  value: string;
};

export default function ({ onPress, value }: Props) {
  return (
    <Contanier>
      <TouchableButton onPress={onPress}>
        <AddButton name="add-circle" size={90} />
      </TouchableButton>
    </Contanier>
  );
}

const Contanier = styled(View)`
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding-bottom: 25px;
  padding-right: 25px;
  right: 0;
`;

const TouchableButton = styled.TouchableOpacity``;
const AddButton = styled(Icon)`
  color: ${({ theme }) => theme.border};
`;
