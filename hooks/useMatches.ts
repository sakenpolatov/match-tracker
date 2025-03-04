import { useQuery } from "@tanstack/react-query";
import { Match } from "@/types/match";
import { fetchMatches } from "@/services/api";

export const useMatches = () => {
  return useQuery<Match[]>({
    queryKey: ["matches"],
    queryFn: fetchMatches,
    staleTime: 1000 * 60, 
    retry: 1,
  });
};
