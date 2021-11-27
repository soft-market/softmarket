import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import Button from "./Button";
import CenterView from "../CenterView";

storiesOf("Button", module)
  .add("default", () => <CenterView></CenterView>)
  .add("with text type", () => (
    <Button onPress={action("clicked-text")}>
      <Text>{text("Button text", "Hello Button")}</Text>
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
