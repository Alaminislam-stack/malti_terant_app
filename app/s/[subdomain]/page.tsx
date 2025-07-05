import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import Link from "next/link";
import React from "react";

interface Props {
  params: Promise<{ subdomain: string }>;
}

async function Subdomain({ params }: Props) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgId = org?.id;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgId));

  return (
    <div className="py-10 lg:py-[50px] px-10 lg:px-[200px] min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...blogs]
          .sort((a, b) => b.id.localeCompare(a.id))
          .map((blog) => (
            <div key={blog.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold mb-3 text-gray-900">{blog.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {blog.body.length > 100
                  ? blog.body.slice(0, 100) + "..."
                  : blog.body}
              </p>
              <Link href={`${baseUrl}/s/${subdomain}/subsiteblog/${blog.id}`}>
                <span className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium transition-colors">
                  Read More →
                </span>
              </Link>
            </div>
          ))}
      </div>
      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts found for this subdomain.</p>
        </div>
      )}
    </div>
  );
}

export default Subdomain;
