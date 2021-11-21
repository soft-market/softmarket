import Config from "react-native-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { split } from "@apollo/client/link/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { ApolloLink } from "@apollo/client/link/core";
const httpLink = new HttpLink({
  uri: `${Config.API_URL}`
});

const wsLink = new WebSocketLink({
  uri: `ws://${Config.API_URL}`,
  options: { reconnect: true }
});
const cache = new InMemoryCache();
const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token
    }
  };
});
const httpAuthLink = authLink.concat(httpLink);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpAuthLink
);

export default new ApolloClient({
  link: ApolloLink.from([errorLink, link]),
  cache
});
