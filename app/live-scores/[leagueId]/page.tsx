
"use client";
import "../../../styles/live-scores.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const formatDate = (utcDate: string) => {
  const date = new Date(utcDate);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit", 
    hour12: true, 
  };

  return date.toLocaleString("en-US", options);
};

export default function LeagueScoresPage() {
  const { leagueId } = useParams();
  const [scores, setScores] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/football/${leagueId}`);
        const data = await response.json();
        if (data.matches) {
          setScores(data.matches);
        } else {
          setScores([]); 
        }
      } catch (err) {
        setError("Failed to fetch live scores.");
      } finally {
        setLoading(false);
      }
    };

    if (leagueId) {
      fetchScores();
    }
  }, [leagueId]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Live Scores - {leagueId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scores.length > 0 ? (
          scores.map((match) => (
            <div
              key={match.id}
              className="card bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {/* Team Names */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-black">
                {match.homeTeam.name} vs {match.awayTeam.name}
              </h3>

              {/* Score */}
              <p className="text-lg font-bold text-center text-blue-500 mb-4">
                {match.score.fullTime.home} - {match.score.fullTime.away}
              </p>

              {/* Date & Status */}
              <p className="text-sm text-gray-600 text-center mb-2">Date: {formatDate(match.utcDate)}</p>
              <p className="text-sm text-gray-600 text-center">Status: {match.status}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-lg">No matches available for this league.</div>
        )}
      </div>
    </div>
  );
}
