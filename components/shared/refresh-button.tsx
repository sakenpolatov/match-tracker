"use client";

import Image from "next/image";
import { useMatches } from "@/hooks/useMatches";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const buttonStyles = {
  base: "flex items-center justify-center gap-2 w-[204px] h-[56px] font-bold text-lg rounded-md transition cursor-pointer",
  disabled: "bg-[#701328] text-[#787878] cursor-not-allowed",
  default: "bg-[#EB0237] active:bg-[#A01131] hover:bg-[#EB0237] focus:bg-[#EB0237]",
};

export const RefreshButton = () => {
  const { refetch, isFetching } = useMatches();

  return (
    <Button
      onClick={() => refetch()}
      disabled={isFetching}
      className={cn(
        buttonStyles.base,
        isFetching ? buttonStyles.disabled : buttonStyles.default
      )}
    >
      <span className="select-none text-[18px]">Обновить</span>
      <Image
        src="/icons/arrows.svg"
        alt="Refresh Icon"
        width={26}
        height={26}
        className={cn(isFetching && "animate-spin-reverse")}
      />
    </Button>
  );
};
