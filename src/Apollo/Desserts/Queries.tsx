import {  gql } from '@apollo/client';

export const DESSERTS_QUERY = gql`
  query GetDesserts {
    desserts {
        id
        name
        calories
        fat
        carbs
        protein
        selected
    }
  }
`;

