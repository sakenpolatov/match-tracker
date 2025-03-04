import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Match Tracker</h1>

      <div className="flex gap-4 items-center">
        <img src="/icons/alert.svg" alt="Alert Icon" className="w-6 h-6 text-red-500" />
        <Button 
          type="button" 
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded focus:outline-none"
        >
          <img src="/icons/Refresh.svg" alt="Refresh Icon" className="w-4 h-4" />
          Обновить
        </Button>
      </div>
    </div>
  );
}
