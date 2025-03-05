import { Team } from "@/types/match";
import { PlayerCard } from "./PlayerCard";

interface TeamStatsProps {
  team: Team;
}

export const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  return (
    <div className="bg-[#0B0E12] p-3 rounded w-full">

      <div className="flex gap-4 justify-center">
        {team.players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>


			<div className="bg-[#101318] flex justify-between mt-2  pt-3 px-6 py-3 w-full  mx-auto rounded select-none">
  <div className="flex-1 text-[14px] text-[#FAFAFA66] text-center select-none">
    Points: <span className="text-[16px] text-[#F2F6F6] font-semibold select-none">{team.points}</span>
  </div>
  <div className="flex-1 text-[14px] text-[#FAFAFA66] text-center select-none">
    Место: <span className="text-[16px] text-[#F2F6F6] font-semibold select-none">{team.place}</span>
  </div>
  <div className="flex-1 text-[14px] text-[#FAFAFA66] text-center">
    Всего убийств: <span className="text-[16px] text-[#F2F6F6] font-semibold select-none">{team.total_kills}</span>
  </div>
</div>


    </div>
  );
};
