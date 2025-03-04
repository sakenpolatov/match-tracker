import { Match } from "@/types/match";
import Image from "next/image";
import { MatchStatus } from "./matchStatus";


interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  console.log("Match status:", match.status);

  return (
    <div className="flex items-center justify-between bg-[#0B0E12] text-white p-4 rounded-md shadow-md w-full h-[87px]">
      {/* Левая часть */}
      <div className="flex items-center gap-4">
        <Image src="/icons/team.svg" alt="Team 1 Logo" width={48} height={48} />
        <span className="text-lg font-medium">{match.homeTeam.name}</span>
      </div>

      {/* Центр: Счет и статус */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[20px] font-semibold leading-[24.2px]">
          {match.homeScore} : {match.awayScore}
        </span>
        <MatchStatus status={match.status} />
      </div>

      {/* Правая часть */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">{match.awayTeam.name}</span>
        <Image src="/icons/team.svg" alt="Team 2 Logo" width={48} height={48} />
      </div>
    </div>
  );
};
