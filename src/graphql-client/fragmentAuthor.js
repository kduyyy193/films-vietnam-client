import { gql } from "@apollo/client";

export const author_filed = gql`
  fragment authorFiled on Author {
    id
    name
    date
    address
    films {
      id
      name
    }
  }
`;
