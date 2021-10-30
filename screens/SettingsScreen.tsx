import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootTabScreenProps } from "../types";

export default function ({ navigation }: RootTabScreenProps<"Settings">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
