import { gql } from "@apollo/client";

export const UPLOAD = gql`
  mutation UploadFile($attachments: Upload!) {
    uploadFile(attachments: $attachments)
  }
`;
