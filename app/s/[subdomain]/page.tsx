import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import Link from "next/link";
import React from "react";

async function Subdomain({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgId = org?.id;
  const buseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgId));

  return (
    <div className=" py-10 lg:py-[50px] px-10 lg:px-[200px] h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[...blogs]
          .sort((a, b) => b.id.localeCompare(a.id))
          .map((blog) => (
            <div key={blog.id} className="p-4 ">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p>
                {blog.body.length > 100
                  ? blog.body.slice(0, 100) + "..."
                  : blog.body}
              </p>
              <Link href={`${buseUrl}/s/${subdomain}/subsiteblog/${blog.id}`}>
                <span className="text-blue-600 hover:text-blue-300 cursor-pointer">
                  See More
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Subdomain;
