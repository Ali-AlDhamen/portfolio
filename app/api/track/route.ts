import { NextRequest, NextResponse } from "next/server";
import { analytics } from "../../../utils/analytics";

export async function POST(req: NextRequest) {
  const { social } = await req.json();

  try {
    console.log("tracking social media event", social);
    analytics.track("socialMedia", { social });

    NextResponse.json(
      { message: "Event tracked successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Error tracking event" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Event tracked successfully" },
    { status: 200 }
  );
}
