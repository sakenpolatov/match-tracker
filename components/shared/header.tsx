"use client";

import { Container } from "./container";
import { RefreshButton } from "./refresh-button";
import { Title } from "./title";


export const Header = () => (
  <header className="bg-[#06080C] py-6 shadow-md w-full">
    <Container className="flex justify-between items-center">
      <Title
        text="Match Tracker"
        size="lg"
        className="text-white font-[TacticSans] italic leading-[32px]"
      />
      <RefreshButton />
    </Container>
  </header>
);
