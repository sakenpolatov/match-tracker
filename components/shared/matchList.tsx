"use client";

import { useMatches } from "@/hooks/useMatches";
import { Container } from "./container";
import { MatchCard } from "./matchCard";
import { Skeleton } from "@/components/ui/skeleton"; 

export const MatchList = () => {
  const { data: matches = [], isLoading, error } = useMatches();
	const skeletonCount = matches.length || 7;

  if (isLoading) {
    return (
      <Container>
        <div className="w-full mt-[32px] flex flex-col gap-[12px]">
          {[...Array(skeletonCount)].map((_, index) => (
            <Skeleton key={index} className="h-[87px] w-full bg-[#0B0E12] rounded-md animate-pulse" />
          ))}
        </div>
      </Container>
    );
  }

  if (error) {
    return <p className="text-red-500">Ошибка загрузки данных</p>;
  }

  return (
    <Container>
      <div className="w-full mt-[32px] flex flex-col gap-[12px]">
        {matches.map((match) => (
          <MatchCard key={match.title} match={match} />
        ))}
      </div>
    </Container>
  );
};
