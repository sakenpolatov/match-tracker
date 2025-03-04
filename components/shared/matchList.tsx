"use client";

import { useMatches } from "@/hooks/useMatches";
import { Container } from "./container";
import { MatchCard } from "./matchCard";

export const MatchList = () => {
  const { data: matches = [], isLoading, error } = useMatches();

  if (isLoading) return <p className="text-white">Загрузка...</p>;
  if (error) return <p className="text-red-500">Ошибка загрузки данных</p>;

  return (
    <Container>
      <div className="w-full mt-[32px]">
        <div className="flex flex-col gap-[12px]">
          {matches.map((match) => (
            <MatchCard key={match.title} match={match} />
          ))}
        </div>
      </div>
    </Container>
  );
};
