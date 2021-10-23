import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import BottomNavigation from "../navigation/BottomNavigation";
import { RootTabScreenProps } from "../types";

const HomeScreen = ({ navigation }: RootTabScreenProps<"Settings">) => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
`;

export default HomeScreen;
