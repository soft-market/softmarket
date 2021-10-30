import "styled-components";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    primary: string;
    card: string;
    border: string;
    notification: string;
  }
}

export const light: DefaultTheme = {
  text: "#000",
  background: "#fff",
  tint: "#2f95dc",
  tabIconDefault: "#ccc",
  tabIconSelected: "#2f95dc",
  primary: "#1e90ff",
  card: "#b0e0e6",
  border: "lightskyblue",
  notification: "#00bfff"
};

export const dark: DefaultTheme = {
  text: "#fff",
  background: "#000",
  tint: "#fff",
  tabIconDefault: "#ccc",
  tabIconSelected: "#fff",
  primary: "#1e90ff",
  card: "#b0e0e6",
  border: "lightskyblue",
  notification: "#00bfff"
};
