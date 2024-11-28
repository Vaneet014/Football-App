// app/api/football/[leagueId]/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { leagueId: string } }) {
  const { leagueId } = params;
  const apiUrl = `https://api.football-data.org/v4/competitions/${leagueId}/matches`;
  const apiKey = 'c7d2771fb2c84af1a0a2907aab5d61b8'; 

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Auth-Token": apiKey,
      },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
