import { useQuery } from "@tanstack/react-query";
import { client } from "./client";

export const useContactSearch = (input: string) =>
  useQuery({
    queryKey: ["contacts", "search", { input }],
    queryFn: () => {
      console.log("searching for '" + input + "'");
      return client.searchContacts(input);
    },
  });
