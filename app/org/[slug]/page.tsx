"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { createBlog } from "./actions";
import { useOrganization, OrganizationProfile } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Badge } from "@/components/ui/badge";

export default function Organization({
  params,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const selectedOrg = useOrganization();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState<
    { id: string; title: string; body: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const buseUrl: string = process.env.NEXT_PUBLIC_BASE_WIUTHP_URL ?? "";
  const { slug } = React.use(params);
  const protocal: string = process.env.NEXT_PUBLIC_PROTOCAL ?? "";

  const subdomain = `${protocal}${slug}.${buseUrl}`;
  const [textToCopy] = useState(subdomain);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const handleCreateBlog = async () => {
    if (!selectedOrg.organization?.id) return;
    if (!title || !content) {
      toast.error("Title and content are required!");
      return;
    }

    await createBlog({
      body: content.trim(),
      title: title.trim(),
      orgId: selectedOrg.organization?.id,
    });
    toast.success("Blog Create Successfull");
  };

  const fetchBlogs = async () => {
    setIsLoading(true);
    if (!selectedOrg.organization?.slug) return;
    const response = await fetch(
      `/api/blogslist?slug=${selectedOrg.organization?.slug}`
    );
    const data = await response.json();
    setBlogs(data.blogs || "No Blogs");
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, [selectedOrg.organization?.slug, fetchBlogs]);

  return (
    <div className=" py-10 lg:py-[50px] px-10 lg:px-[200px]">
      <Badge className="bg-[#dbe8f2] text-[#111416] rounded-xl px-3 py-[3px]">
        <span className="font-medium text-xs">Shere You Organization</span>
      </Badge>
      <div className=" flex justify-between text-center bg-gray-300 rounded-full px-5 py-3 mb-10">
        <p>{subdomain} </p>
        <button
          onClick={handleCopy}
          className="cursor-pointer font-semibold hover:text-gray-400"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-end">
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="cursor-pointer">Edit Organization</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Organization Profile</SheetTitle>
              </SheetHeader>
              <OrganizationProfile routing="hash" />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className=" p-10 ">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-5"
          placeholder="Blog title"
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-5"
          placeholder="Blog content"
        />
        <Button onClick={handleCreateBlog} className="cursor-pointer">
          Create blog
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? "Loading..."
          : [...blogs]
              .sort((a, b) => b.id.localeCompare(a.id))
              .map((blog) => (
                <div
                  key={blog.id}
                  className="px-10 py-5 flex flex-col justify-center items-start gap-2"
                >
                  <h2 className="text-xl font-bold">{blog.title}</h2>
                  <p>
                    {blog.body.length > 100
                      ? blog.body.slice(0, 100) + "..."
                      : blog.body}
                  </p>
                  <Link href={`blogId/${blog.id}`}>
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
