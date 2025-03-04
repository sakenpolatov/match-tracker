import { Match } from "@/types/match";
import { getStatusMatchStyle } from "@/utils/getStatusMatchStyle";
import Image from "next/image";

export default function MatchCard({ match }: { match: Match }) {
  return (
    <div className="flex items-center justify-between bg-[#0B0E12] text-white p-4 rounded-md shadow-md w-full h-[87px]">
 
      <div className="flex items-center gap-4">
			<Image
          src="/icons/team.svg"
          alt="Team Logo"
          width={48}
          height={48}
        />
        <span className="text-lg font-medium">{match.homeTeam.name}</span>
      </div>


      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">{match.homeScore} : {match.awayScore}</span>
        <span className={`px-2 py-1 text-sm rounded ${getStatusMatchStyle(match.status)}`}>
          {match.status}
        </span>
      </div>


      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">{match.awayTeam.name}</span>
        <Image
          src="/icons/team.svg"
          alt="Team Logo"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}

