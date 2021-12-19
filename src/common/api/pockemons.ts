import { useQuery } from "react-query";
import request from "axios";

type ResponseType = {
  count: number;
  next: string;
  previous: null | string;
  results: { name: string; url: string }[];
};

export const timeout = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const usePockemons = () =>
  useQuery<ResponseType>(
    "pockemons",
    async () => {
      await timeout(5000);
      console.log('=== DO REQUEST ===');
      return request("https://pokeapi.co/api/v2/pokemon/").then(
        (res) => res.data
      );
    }, {
      suspense: false
    }
  );
