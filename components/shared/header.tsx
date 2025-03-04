"use client";

import { Container } from "./container";
import { RefreshButton } from "./refresh-button";

export const Header = () => (
  <header className="bg-[#06080C] py-6 shadow-md w-full">
    <Container className="flex justify-between items-center">
      <h1 className="text-white text-[32px] leading-[32px] font-[TacticSans] italic">
        Match Tracker
      </h1>
      <RefreshButton />
    </Container>
  </header>
);
