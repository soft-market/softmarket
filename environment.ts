//* environment.js
import Constants from "expo-constants";
import { Platform } from "react-native";
const localhost =
  Platform.OS === "ios"
    ? "116.121.235.153:3000/graphql"
    : "116.121.235.153:3000/grahpql";

const ENV = {
  dev: {
    loadStorybook: false,
    apiUrl: localhost
  },
  staging: {
    loadStorybook: false,
    apiUrl: "[your.staging.api.here]"
  },
  production: {
    loadStorybook: false,
    apiUrl: "[your.production.api.here]"
  }
};

const getEnvVars = (env = Constants.manifest?.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.production;
  }
};

export default getEnvVars;
