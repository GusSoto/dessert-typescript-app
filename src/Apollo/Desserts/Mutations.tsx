import { gql } from '@apollo/client';

export const ADD_DESSERT_MUTATION = gql`
  mutation AddDessert($id:String!,
    $name: String,
    $calories: Int,
    $fat:Int,
    $carbs: Int,
    $protein: Int,
    $selected: Boolean) {
        addDessert(id: $id,name: $name,calories: $calories,fat: $fat, carbs: $carbs,protein: $protein,selected: $selected) {
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