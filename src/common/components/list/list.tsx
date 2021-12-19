import { timeout, usePockemons } from "../../api/pockemons";

export default function List() {
  const { data } = usePockemons();
  // const data: any = {results: []};
  return (
    <>
      {data.results.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
    </>
  );
}
