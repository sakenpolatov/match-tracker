'use client';
import { Match } from "@/types/match";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui";
import { MatchDetails, MatchStatus } from ".";


interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
  <CollapsibleTrigger asChild>
    <div
      className={`flex items-center justify-between bg-[#0B0E12] text-white p-4 shadow-md w-full cursor-pointer transition-all
      ${isOpen ? "rounded-t-md rounded-b-none" : "rounded-md"}`} 
    >
      <div className="flex items-center gap-4">
        <Image src="/icons/team.svg" alt="Team 1 Logo" width={48} height={48} />
        <span className="text-lg font-medium">{match.homeTeam.name}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[20px] font-semibold leading-[24.2px]">
          {match.homeScore} : {match.awayScore}
        </span>
        <MatchStatus status={match.status} />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">{match.awayTeam.name}</span>
        <Image src="/icons/team.svg" alt="Team 2 Logo" width={48} height={48} />
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>
    </div>
  </CollapsibleTrigger>

  <CollapsibleContent 
    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out 
    ${isOpen ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-90"}`}
  >
    <MatchDetails homeTeam={match.homeTeam} awayTeam={match.awayTeam}  />
  </CollapsibleContent>
</Collapsible>


  );
};
