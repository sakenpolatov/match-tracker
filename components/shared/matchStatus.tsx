import React from "react";
import { cn } from "@/lib/utils"; 

interface MatchStatusProps {
  status: string;
}

export const MatchStatus: React.FC<MatchStatusProps> = ({ status }) => {

  const normalizedStatus =
    status === "Ongoing" ? "Live" : status === "Scheduled" ? "Match preparing" : status;

  const statusStyles: Record<string, string> = {
    Live: "bg-[#43AD28] text-white",
    Finished: "bg-[#EB0237] text-white",
    "Match preparing": "bg-[#EB6402] text-white",
  };

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-md text-sm select-none cursor-default pointer-events-none",
        statusStyles[normalizedStatus] || "bg-gray-700 text-white"
      )}
    >
      {normalizedStatus}
    </span>
  );
};
