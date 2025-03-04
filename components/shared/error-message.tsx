import Image from "next/image";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 w-[480px] h-[56px] bg-[#0F1318] text-white rounded-md px-4",
        className
      )}
    >
      <Image src="/icons/alert.svg" alt="Alert Icon" width={26} height={26} />
      <span className="text-[18px] font-medium">{message}</span>
    </div>
  );
};
