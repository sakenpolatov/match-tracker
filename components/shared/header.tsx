"use client";

import { Container } from "./container";
import RefreshButton from "./refresh-button";

export default function Header() {
  return (
    <header className="bg-[#06080C] py-6 shadow-md w-full">
      <Container className="flex justify-between items-center">
        <h1 className="text-white text-[32px] leading-[32px] font-[TacticSans] italic">
          Match Tracker
        </h1>
        <RefreshButton />
      </Container>
    </header>
  );
}

