import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clerkClient();
    const result = await client.organizations.getOrganizationList({
      limit: 50,
      offset: 0,
      includeMembersCount: true,
      orderBy: "-created_at",
    });

    return NextResponse.json({
      organizations: result.data,
      totalCount: result.totalCount,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch organizations", details: String(error) },
      { status: 500 }
    );
  }
}