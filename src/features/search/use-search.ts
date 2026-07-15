import { useQuery } from "@tanstack/react-query";

import { NpmSearchResult } from "@/types/npm";

import { searchPackages } from "./search.service";

export function useSearch(query: string) {
  return useQuery<NpmSearchResult[], Error>({
    queryKey: ["search", query],
    queryFn: () => searchPackages(query),
    enabled: query.trim().length > 2,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}