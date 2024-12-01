"use client";
import "../../styles/live-scores.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const leagues = [
  { id: "CL", name: "Champions League", image: "https://crests.football-data.org/CL.png" },
  { id: "PL", name: "Premier League", image: "https://crests.football-data.org/PL.png" },
  { id: "PD", name: "La Liga", image: "https://crests.football-data.org/PD.png" },
  { id: "SA", name: "Serie A", image: "https://crests.football-data.org/SA.png" },
  { id: "BL1", name: "Bundesliga", image: "https://crests.football-data.org/BL1.png" },
];

export default function LiveScores() {
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const router = useRouter();

  const handleLeagueClick = (leagueId: string) => {
    setSelectedLeague(leagueId);
    router.push(`/live-scores/${leagueId}`);
  };

  return (
    <div className=" p-12 " >
      <h1 className="text-3xl font-bold text-center mb-8">Live Scores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {leagues.map((league) => (
          <div
            key={league.id}
            className="league-card flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6"
            onClick={() => handleLeagueClick(league.id)}
          >
            <img
              src={league.image}
              alt={league.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">{league.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
