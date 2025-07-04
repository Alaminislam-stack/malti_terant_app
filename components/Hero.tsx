import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SignUpButton } from "@clerk/nextjs";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10">
      <div className="">
        <Image
          src="/images/Hero.jpg"
          alt="Hero Image"
          width={550}
          height={550}
          className="w-full h-auto rounded-lg shadow-lg object-cover md:max-w-[550px] md:max-h-[550px] lg:max-w-[650px] lg:max-h-[650px]"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-black text-[#111416] text-5xl tracking-[-2.00px] leading-[60px] font-sans">
            Share your ideas with the world
          </h1>
          <p className="font-normal text-[#111416] text-base leading-6 font-sans">
            Bloggr is a platform for writers to share their stories and connect
            with readers. Start your blog today and join a community of
            passionate writers.
          </p>
        </div>
        <SignUpButton>
          <Button className="cursor-pointer h-12 px-5 bg-[#dbe8f2] text-[#111416] rounded-xl hover:bg-[#c5d9e8] w-full md:max-w-[580px]">
            <span className="font-bold text-base">Get Started</span>
          </Button>
        </SignUpButton>
      </div>
    </div>
  );
}

export default Hero;
