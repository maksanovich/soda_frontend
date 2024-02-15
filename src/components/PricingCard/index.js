import React from "react";
import { Sticker } from "./Sticker";

export const PricingCard = ({ item }) => {

    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] shadow-md">
                <span className="mb-3 block text-lg font-semibold text-primary">
                    {item.type}
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                    {item.price}
                    <span className="text-base font-medium text-body-color dark:text-dark-6">
                        / {item.subscription}
                    </span>
                </h2>
                <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                    {item.description}
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                    {
                        item.content.map((data, index) => (
                            <p key={index} className="text-base text-body-color dark:text-dark-6">{data}</p>
                        ))
                    }
                </div>
                <a
                    href="/#"
                    className={` ${item.active
                        ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white bg-[#ff6166] transition hover:bg-opacity-90"
                        : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-[#ff6166] dark:border-dark-3"
                        } `}
                >
                    {item.buttonText}
                </a>
                <Sticker />
            </div>
        </div>
    );
};
