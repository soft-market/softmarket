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

export const useCreateItem = ({
  title,
  price,
  description
}: createItemInput) => {
  const data = useMutation(CREATE_ITEM, {
    variables: {
      title,
      price,
      description
    }
  });

  return data;
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
  mutation CreateItem($title: string!, $price: number!, $description: string) {
    createItem(
      input: { title: $title, price: $price, description: $description }
    ) {
      id
    }
  }
`;
