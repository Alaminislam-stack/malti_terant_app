import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function Pricing() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$0",
      popular: false,
      buttonText: "Get Started",
      features: ["Unlimited posts", "Basic customization", "Community support"],
    },
    {
      title: "Pro",
      price: "$10",
      popular: true,
      buttonText: "Upgrade",
      features: [
        "Unlimited posts",
        "Advanced customization",
        "Priority support",
        "Custom domain",
      ],
    },
    {
      title: "Premium",
      price: "$25",
      popular: false,
      buttonText: "Upgrade",
      features: [
        "Unlimited posts",
        "Full customization",
        "Dedicated support",
        "Custom domain",
        "Analytics",
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[#111416] text-[22px] leading-7 font-sans pt-5 pb-3">
        Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 py-3">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="border border-[#dde0e2] rounded-xl">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#111416] text-base leading-5 font-sans">
                    {plan.title}
                  </h3>
                  {plan.popular && (
                    <Badge className="bg-[#dbe8f2] text-[#111416] rounded-xl px-3 py-[3px]">
                      <span className="font-medium text-xs">Most Popular</span>
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-black text-[#111416] text-4xl tracking-[-1.00px] leading-[45px] font-sans">
                    {plan.price}
                  </span>
                  <span className="font-bold text-[#111416] text-base leading-5 font-sans">
                    /month
                  </span>
                </div>
              </div>

              <Button className="cursor-pointer h-10 w-full bg-[#f2f2f4] text-[#111416] rounded-xl hover:bg-[#e5e5e7]">
                <span className="font-bold text-sm">{plan.buttonText}</span>
              </Button>

              <div className="flex flex-col gap-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5">
                      <p className="w-5 h-5 text-[#111416]" />
                    </div>
                    <span className="font-normal text-[#111416] text-[13px] leading-5 font-sans">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
