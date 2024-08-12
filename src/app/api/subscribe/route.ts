/** @format */

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();
  const apiString = `${process.env.NEXT_PUBLIC_BEEHIIV_API_URL}/publications/${process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID}/subscriptions`;

  try {
    const response = await fetch(apiString, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        custom_fields: [
          {
            name: "Name",
            value: name,
          },
        ],
        reactivate_existing: true,
        send_welcome_email: true,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Subscribed successfully" },
        { status: 200 },
      );
    } else {
      const errorText = await response.text();
      console.error("Subscription failed:", errorText);
      return NextResponse.json(
        { message: "Subscription failed" },
        { status: response.status },
      );
    }
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
