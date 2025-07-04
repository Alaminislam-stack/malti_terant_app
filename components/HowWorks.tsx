import React from 'react'

function HowWorks() {
   
     const steps = [
    {
      title: "Create Your Blog",
      description:
        "Sign up for a free account and create your blog in minutes.",
    },
    {
      title: "Start Writing",
      description:
        "Use our powerful editor to write and format your blog posts. Add images, videos, and other media to enhance your content.",
    },
    {
      title: "Share Your Work",
      description:
        "Share your blog posts with your audience and the Bloggr community. Get feedback and build your readership.",
    },
  ];



  return (
    <div className="flex flex-col">
          <h2 className="font-bold text-[#111416] text-[22px] leading-7 font-sans pt-5 pb-3">
            How It Works
          </h2>

          <div className="flex flex-col gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-10 flex flex-col items-center">
                  <div className="w-6 h-6 bg-[url(/vector---0-3.svg)] bg-cover mt-3" />
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-[#dde0e2]" />
                  )}
                </div>
                <div className="flex-1 py-3">
                  <h3 className="font-medium text-[#111416] text-base leading-6 font-sans">
                    {step.title}
                  </h3>
                  <p className="font-normal text-[#6b7582] text-base leading-6 font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

  )
}

export default HowWorks