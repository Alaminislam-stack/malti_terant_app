import { db } from '@/db';
import { blogTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import React from 'react'
 // import the delete action
import { redirect } from 'next/navigation';
import { deleteBlog } from '../actions';

async function Blog({ params }: {
  params: { blogId: string; slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) { 
  const blogId = params.blogId

  const blog = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.id, blogId));
  
  const blogData = blog[0];

  async function handleDelete() {
    "use server";
    await deleteBlog(blogId);
    redirect(`/org/${params.slug}`);
  }

  return (
    <div className="py-10 lg:py-[50px] px-10 lg:px-[200px] h-[100vh]">
      <h1 className='text-center text-4xl font-semibold mb-10'>
        {blogData.title}
      </h1>
      <p>{blogData.body}</p>
      <form action={handleDelete}>
        <button
          type="submit"
          className="mt-8 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete Blog
        </button>
      </form>
    </div>
  )
}

export default Blog