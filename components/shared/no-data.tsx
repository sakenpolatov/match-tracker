"use client";

import Image from "next/image";

interface NoDataProps {
  message?: string;
}

export const NoData = ({ message }: NoDataProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Image 
        src="/icons/nodata.svg" 
        alt="No Data" 
        width={400} 
        height={400} 
        className="opacity-80"
      />
      <p className="text-white text-lg mt-4">{message}</p>
    </div>
  );
};
