import { gql } from '@apollo/client';

export const QUERY_GET_SPECIFIC_COUNTRY = gql`
  query GetSpecificCountry ($name: String!) {
    countries(name: $name) {
      edges {
        node {
          name
          capital
          region
          population
          timezones
          nativeName
          currencies{
            edges{
              node{
                name
                code
                symbol
              }
            }
          }
          flag
        }
      }
    }
  }
`;