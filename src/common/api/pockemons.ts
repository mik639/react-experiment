import { useQuery } from "react-query";
import request from "axios";

type ResponseType = {
  count: number;
  next: string;
  previous: null | string;
  results: { name: string; url: string }[];
};

/**
 * Helper for latency emulation
 * @param ms delay in milliseconds
 * @returns promise that will resolve in specified delay
 */
function timeout(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Data hook for list Pockemons
 * @returns List of Pockemons
 */
export const usePockemons = () =>
  useQuery<ResponseType>("pockemons", async () => {
    // emulate network latency
    await timeout(5000);

    return request("https://pokeapi.co/api/v2/pokemon/").then(
      (res) => res.data
    );
  });
