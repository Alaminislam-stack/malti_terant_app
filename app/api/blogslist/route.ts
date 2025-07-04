import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // slug query parameter theke nite hobe
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    if (!slug) {
      return NextResponse.json({ error: "No slug provided" }, { status: 400 });
    }

    const client = await clerkClient();
    const org = await client.organizations.getOrganization({ slug });
    const orgId = org?.id;
    if (!orgId) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }

    const blogs = await db
      .select()
      .from(blogTable)
      .where(eq(blogTable.orgId, orgId));

    return NextResponse.json({
      blogs,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}