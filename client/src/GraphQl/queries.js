import { gql } from "@apollo/client";

export const getAll=gql`
query {
  getAll {
      id
    title
    description
  }

}
`


