import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../storybook/stories/CenterView";
import React from "react";
import SMButton from "./SMButton";

storiesOf("Atoms/SMButton", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("confirm", () => <SMButton content="confirm" width={80} height={40} />);
