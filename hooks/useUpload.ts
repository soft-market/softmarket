import { gql, useMutation } from "@apollo/client";

export const UPLOAD = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
