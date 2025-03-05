import { Team } from "@/types/match";
import { TeamStats } from "./teamStats";

interface MatchDetailsProps {
  homeTeam: Team;
  awayTeam: Team;

}

export const MatchDetails: React.FC<MatchDetailsProps> = ({ homeTeam, awayTeam }) => {
  return (
    <div
      className="flex justify-center w-full bg-[#0B0E12] px-4 py-2 rounded-b-md transition-all"
    >
      <div className="flex gap-[32px] max-w-[1836px] w-full">
        <div className="w-[874px] flex-shrink-0">
          <TeamStats team={homeTeam} />
        </div>
        <div className="w-[874px] flex-shrink-0">
          <TeamStats team={awayTeam} />
        </div>
      </div>
    </div>
  );
};
