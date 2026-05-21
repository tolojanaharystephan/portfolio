import { NextResponse } from "next/server";
import { fetchGitHubProfile } from "@/lib/github";

export async function GET() {
  const profile = await fetchGitHubProfile();

  if (!profile) {
    return NextResponse.json(
      { error: "Unable to fetch GitHub profile" },
      { status: 502 }
    );
  }

  return NextResponse.json(profile);
}
