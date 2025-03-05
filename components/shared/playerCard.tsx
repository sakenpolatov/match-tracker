import Image from "next/image";
import { Player } from "@/types/match";

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-[#101318] px-4 py-3 rounded-md flex items-center w-[286px] h-[52px] gap-2">

      <Image
        src="/icons/avatar.svg"
        alt={player.username}
        width={36}
        height={36}
        className="rounded-full flex-shrink-0"
      />

      <div className="flex items-center justify-between w-full">

        <p className="text-white text-[16px] font-medium leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap w-[105px] text-left">
          {player.username}
        </p>

   
        <div className="flex items-center gap-[8px] text-[14px] text-white leading-[21px] text-right min-w-[80px]">
          <span className="opacity-75">Убийств:</span> 
          <span className="text-[16px] font-semibold text-white">{player.kills}</span>
        </div>
      </div>
    </div>
  );
};
