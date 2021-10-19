import { Image, SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
type Props = {};

const FirstInitScreen = ({}: Props) => {
  const [status, setStatus] = useState<string>('loading');

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <TitleView>
        <Title>소프트 마켓에 오신걸 환영합니다!</Title>
      </TitleView>
      <LogoImage source={require('../assets/images/softmarket_logo.png')} />
      <LoadingView>
        <LoadingText>{status === 'complete' ? `완료` : `로딩중`}</LoadingText>
      </LoadingView>
    </Wrapper>
  );
};
const Wrapper = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const TitleView = styled(View)``;
const LogoImage = styled(Image)`
  width: 250;
  height: 250;
`;
const LoadingView = styled(View)``;
const LoadingText = styled(Text)`
  font-size: 24px;
`;
const Title = styled(Text)`
  font-size: 24px;
`;

export default FirstInitScreen;
