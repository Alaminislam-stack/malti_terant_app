import React from 'react'
import { Card, CardContent } from './ui/card';
import { Disc, Edit, Group } from 'lucide-react';

function Why() {

      // Feature cards data
  const features = [
    {
      title: "Easy-to-Use Editor",
      description:
        "Our intuitive editor makes it easy to create beautiful, engaging blog posts. No coding required.",
      icon: <Edit/>,
    },
    {
      title: "Built-in Community",
      description:
        "Connect with other writers and readers through our built-in community features. Share your work, get feedback, and build your audience.",
      icon: <Group />,
    },
    {
      title: "Discoverability",
      description:
        "Get your blog posts discovered by new readers with our search and recommendation features. Reach a wider audience and grow your readership.",
      icon: <Disc />,
    },
  ];


  return (
    
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-black text-[#111416] text-4xl tracking-[-1.00px] leading-[45px] font-sans">
              Why Bloggr?
            </h2>
            <p className="font-normal text-[#111416] text-base leading-6 font-sans max-w-[720px]">
              Bloggr offers a range of features designed to help you succeed as
              a writer. From powerful writing tools to audience engagement
              features, we&apos;sve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {features.map((feature, index) => (
              <Card key={index} className="border border-[#dde0e2] rounded-lg">
                <CardContent className="p-4 flex flex-col gap-3">
                  <div className="w-6 h-6">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#111416] text-base leading-5 font-sans">
                      {feature.title}
                    </h3>
                    <p className="font-normal text-[#6b7582] text-sm leading-[21px] font-sans">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

  )
}

export default Why