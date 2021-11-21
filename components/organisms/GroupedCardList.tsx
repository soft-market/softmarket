import React, { useCallback } from "react";
import { FlatList, ImageURISource, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import SMText from "../atoms/SMText";
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
    container: {
      width: "100%"
    }
  });

  const RecentListHeader = () => {
    return <RecentItemText>Recent Items</RecentItemText>;
  };

  const AllListHeader = () => {
    return <RecentItemText>All Items</RecentItemText>;
  };

  const renderItem = useCallback(({ index, item }) => {
    return <Text key={index}>{item}</Text>;
  }, []);

  return (
    <Container>
      {RecentListHeader()}
      <GroupedCardWrapper
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {cardList.map((card, index) => (
          <CardItem key={index} title={card.title} image={card.image} />
        ))}
      </GroupedCardWrapper>
      <FlatList
        ListHeaderComponent={AllListHeader}
        data={[1, 2, 3]}
        renderItem={renderItem}
      />
    </Container>
  );
};

const Container = styled.View``;
const GroupedCardWrapper = styled.ScrollView``;

const CardView = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;

const RecentItemText = styled(SMText)``;
