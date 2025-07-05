import { db } from '@/db';
import { blogTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

interface Props {
  params: Promise<{ blogId: string }>;
}
export default async function Subblog({ params }: Props) {

  const { blogId } = await params;

  const blog = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.id,blogId));

  const blogData = blog[0];

  if (!blogData) return <div className="p-10">Blog not found</div>;

  return (
    <div className="py-10 lg:py-[50px] px-10 lg:px-[200px] h-[100vh]">
      <h1 className="text-center text-4xl font-semibold mb-10">{blogData.title}</h1>
      <p className="mb-4">{blogData.body}</p>
    </div>
  );
}