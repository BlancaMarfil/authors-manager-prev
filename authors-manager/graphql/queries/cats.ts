import { gql } from "../gql/gql";

export const getCatByName = (name: string) => {
  gql(`
    query getCats(name: $name) {
      name
      description
    }
  }`);
};
    