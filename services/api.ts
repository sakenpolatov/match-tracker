import { Match } from "@/types/match";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchMatches = async (): Promise<Match[]> => {
  const response = await axios.get<{ data: { matches: Match[] } }>(`${API_BASE_URL}/fronttemp`);
  return response.data.data.matches;
};
