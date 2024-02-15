import React from "react";

import { PricingData } from "../../constants/pricingConstant";

import { PricingCard } from "../../components/PricingCard";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[50px]">
      <div className="container mx-auto px-2 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap justify-center">
            {
                PricingData.map((item, index)=>(
                    <PricingCard
                        item={item}
                        key={index}
                    />
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

