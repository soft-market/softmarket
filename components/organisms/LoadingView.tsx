import React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  Image
} from "react-native";
import styled from "styled-components/native";

export default () => {
  return (
    <Container>
      <LogoImage source={require("../../assets/images/softmarket_logo.png")} />
      <LoadingView>
        <LoadingText>Loading</LoadingText>
        <ActivityIndicator animating color={"#535353"} />
      </LoadingView>
    </Container>
  );
};
const Container = styled(SafeAreaView)`
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
