import { gql, useMutation, useQuery } from "@apollo/client";

type createItemInput = {
  title: string;
  price: number;
  description: string;
};

export const useGetItem = () => {
  const { data, loading, error } = useQuery(GET_ITEM);

  return [data, loading, error];
};

export const useCreateItem = () => {
  return useMutation(CREATE_ITEM);
};

const GET_ITEM = gql`
  query {
    items {
      id
      title
      price
      description
    }
  }
`;

const CREATE_ITEM = gql`
  mutation CreateItem(
    $title: String!
    $price: Int!
    $description: String
    $url: String!
  ) {
    createItem(
      input: {
        title: $title
        price: $price
        description: $description
        url: $url
      }
    ) {
      id
    }
  }
`;
