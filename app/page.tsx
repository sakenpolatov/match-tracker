import Header from "@/components/shared/header";
import MatchList from "@/components/shared/matchList";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#06080C] w-full">
      <Header />
      <MatchList />
    </main>
  );
}
