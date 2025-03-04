"use client";

import { Container } from "./container";
import { RefreshButton } from "./refresh-button";
import { Title } from "./title";
import { useMatches } from "@/hooks/useMatches";
import { ErrorMessage } from "./error-message"; 

export const Header = () => {
  const { error } = useMatches();

  return (
    <header className="bg-[#06080C] py-6 shadow-md w-full">
      <Container className="flex justify-between items-center">
        <Title
          text="Match Tracker"
          size="lg"
          className="text-white font-[TacticSans] italic leading-[32px]"
        />

        <div className="flex items-center gap-4">
          {error && <ErrorMessage message="Ошибка: не удалось загрузить информацию" />}
          <RefreshButton />
        </div>
      </Container>
    </header>
  );
};
