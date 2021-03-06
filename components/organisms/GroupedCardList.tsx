import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ImageURISource, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { useGetItem } from "../../hooks/useItem";
import SMText from "../atoms/SMText";
import CardItem from "../molecules/CardItem";
import FullCardItem from "../molecules/FullCardItem";

type Props = {
  cardList?: Array<CardListType>;
};

type CardListType = {
  title: string;
  image: ImageURISource | null;
};

export default ({ cardList }: Props) => {
  const [data, loading, error] = useGetItem();
  const [allItemList, setAllItemList] = useState<CardListType[]>([]);

  useEffect(() => {
    if (!loading && data) {
      setAllItemList(data.items);
    }
  }, [loading, data]);

  const styles = StyleSheet.create({
    container: {
      width: "100%"
    }
  });

  const RecentListHeader = useCallback(() => {
    return <RecentItemText fontSize={22}>Recent Items</RecentItemText>;
  }, []);

  const AllListHeader = useCallback(() => {
    return (
      <HeaderView>
        <RecentItemText fontSize={22}>All Items</RecentItemText>
      </HeaderView>
    );
  }, []);

  const renderItem = useCallback(({ item }) => {
    const { id, title, image } = item;
    return <FullCardItem title={title} image={image} />;
  }, []);

  return (
    <Container>
      {RecentListHeader()}
      <GroupedCardWrapper
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {allItemList.map((card, index) => (
          <CardItem key={index} title={card.title} image={card.image} />
        ))}
      </GroupedCardWrapper>
      <FlatList
        ListHeaderComponent={AllListHeader}
        data={allItemList}
        numColumns={2}
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
      />
    </Container>
  );
};

const Container = styled.View``;
const GroupedCardWrapper = styled.ScrollView`
  height: 150px;
`;
const RecentItemText = styled(SMText)``;
const HeaderView = styled.View`
  height: 30px;
  justify-content: center;
`;
