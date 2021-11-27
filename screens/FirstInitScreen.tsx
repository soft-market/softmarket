import {
  Button,
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator
} from "react-native";
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
      // setStatus("complete");
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
        <LogoImage source={require("../assets/images/softmarket_logo.png")} />
        <LoadingView>
          <LoadingText>Loading</LoadingText>
          <ActivityIndicator animating color={"#535353"} />
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
const LogoImage = styled(Image)`
  width: 250px;
  height: 250px;
`;
const LoadingView = styled(View)`
  height: 80px;
  width: 180px;
  background-color: ${({ theme }) => theme.colors.a1};
  opacity: 0.6;
  border-radius: 10px;
`;
const LoadingText = styled(Text)`
  text-align: center;
  font-size: 16px;
  padding: 8px;
`;

export default FirstInitScreen;
