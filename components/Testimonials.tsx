import React from 'react'

function Testimonials() {

   const testimonials = [
    {
      quote:
        "Bloggr has transformed my writing career. The platform is easy to use, and the community is incredibly supportive.",
      author: "Sophia Bennett, Travel Blogger",
    },
    {
      quote:
        "I love the simplicity of Bloggr. It allows me to focus on my writing without worrying about the technical details.",
      author: "Ethan Carter, Tech Writer",
    },
    {
      quote:
        "Bloggr's discoverability features have helped me reach a wider audience and grow my readership.",
      author: "Olivia Harper, Food Blogger",
    },
  ];



  return (
           
        <div className="flex flex-col">
          <h2 className="font-bold text-[#111416] text-[22px] leading-7 font-sans pt-5 pb-3">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-4 min-w-60">
                <div className="w-full h-[301px] rounded-xl" />
                <div className="flex flex-col">
                  <p className="font-medium text-[#111416] text-base leading-6 font-sans">
                    {testimonial.quote}
                  </p>
                  <span className="font-normal text-[#6b7582] text-sm leading-[21px] font-sans">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
  
  )
}

export default Testimonials