import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import CreateModal from "../components/CreateModal";
import FloatingButton from "../components/molecules/FloatingButton";
import GroupedCardList from "../components/organisms/GroupedCardList";
import { RootTabScreenProps } from "../types";

const HomeScreen = ({ navigation }: RootTabScreenProps<"Settings">) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Container>
        <GroupedCardList
          cardList={[
            { title: "test", image: null },
            { title: "test", image: null },
            { title: "test", image: null }
          ]}
        />
        <FloatingButton
          onPress={() => {
            setVisible(true);
          }}
          value="+"
        />
      </Container>
      {visible && (
        <CreateModal
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
    </>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
`;

export default HomeScreen;
