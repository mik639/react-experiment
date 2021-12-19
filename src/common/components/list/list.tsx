import { usePockemons } from "../../api/pockemons";

export default function List() {
  const { data } = usePockemons();

  return (
    <>
      {data.results.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
    </>
  );
}
