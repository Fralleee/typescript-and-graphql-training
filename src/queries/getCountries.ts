import { gql } from '@apollo/client';

export const QUERY_GET_COUNTRIES = gql`
  query GetCountries ($count: Int!) {
    countries(first:$count) {
      edges {
        node {
          name
          flag
        }
      }
    }
  }
`;