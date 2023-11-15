import { getCats } from "@/functions/graphql/queries/cats";
import { GetCatByNameQuery, useGetCatByNameQuery } from "@/graphql/generated";

export default function Home() {
  const { data } = useGetCatByNameQuery({ variables: { name: "Abyssinian" } });
  console.log(data);

  return <></>;
}
