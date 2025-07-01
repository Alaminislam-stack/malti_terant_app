import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import Link from "next/link";
import React from "react";

async function Subdomain({ params }: { params: { subdomain: string } }) {
  const subdomain = await params.subdomain;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgId = org?.id;

  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgId));

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 border-b">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-600">{blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Subdomain;
