import { Button, Image, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import RootNavigation from "../navigation/RootNavigation";
import BottomNavigation from "../navigation/BottomNavigation";
type Props = {};

const FirstInitScreen = ({}: Props) => {
  const [status, setStatus] = useState<string>("loading");
  const navigator = useNavigation();

  useEffect(() => {
    const timeEvent = setTimeout(() => {
      setStatus("complete");
    }, 5000);

    () => {
      clearTimeout(timeEvent);
    };
  }, []);

  if (status === "complete") {
    return <BottomNavigation />;
  } else {
    return (
      <Wrapper>
        <TitleView>
          <Title>소프트 마켓에 오신걸 환영합니다!</Title>
        </TitleView>
        <LogoImage source={require("../assets/images/softmarket_logo.png")} />
        <LoadingView>
          <LoadingText>로딩중</LoadingText>
        </LoadingView>
      </Wrapper>
    );
  }
};
const Wrapper = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const TitleView = styled(View)``;
const LogoImage = styled(Image)`
  width: 250px;
  height: 250px;
`;
const LoadingView = styled(View)``;
const LoadingText = styled(Text)`
  font-size: 24px;
`;
const Title = styled(Text)`
  font-size: 24px;
`;

export default FirstInitScreen;
