import React from "react";
import { ImageURISource, StyleSheet } from "react-native";
import styled, { useTheme } from "styled-components/native";
import CardItem from "../molecules/CardItem";

type Props = {
  cardList: Array<CardListType>;
};

type CardListType = {
  title: string;
  image: ImageURISource | null;
};

export default ({ cardList }: Props) => {
  const styles = StyleSheet.create({
    center: {
      alignItems: "center"
    }
  });

  return (
    <GroupedCardWrapper horizontal contentContainerStyle={styles.center}>
      <CardView>
        {cardList.map((card, index) => (
          <CardItem key={index} title={card.title} image={card.image} />
        ))}
      </CardView>
    </GroupedCardWrapper>
  );
};

const GroupedCardWrapper = styled.ScrollView``;

const CardView = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  align-items: center;
  justify-content: center;
`;
