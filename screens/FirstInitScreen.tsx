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
import LoadingView from "../components/organisms/LoadingView";

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
    return <LoadingView />;
  }
};

export default FirstInitScreen;
