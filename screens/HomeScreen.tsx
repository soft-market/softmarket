import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import GroupedCardList from "../components/organisms/GroupedCardList";
import { RootTabScreenProps } from "../types";

const HomeScreen = ({ navigation }: RootTabScreenProps<"Settings">) => {
  return (
    <Container>
      <GroupedCardList
        cardList={[
          { title: "test", image: null },
          { title: "test", image: null },
          { title: "test", image: null }
        ]}
      />
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
`;

export default HomeScreen;
