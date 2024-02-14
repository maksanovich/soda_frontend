import React from "react"
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

import {
    buttonGroupData,
    soultionData,
    toolsGroupData
} from "../../constants/featureConstant";

import HoverButton from "../../components/HoverButton"
import ToolGroup from "../../components/ToolGroup";

export default function Feature() {
    return (
        <div className="p-0 m-0">
            <div className="mt-20 px-10 md:flex justify-center w-full">
                <div className="md:w-[40%]">
                    <div className="text-4xl font-black text-center md:text-left text-black">
                        <span>All the Desktop & Online</span>
                        <span className="text-[#ff6166]"> PDF tools </span>
                        <span>you'll ever need</span>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <button className="rounded-3xl bg-[#ff6166] text-white border-2  border-transparent text-base uppercase py-2 px-5 font-semibold hover:bg-[#e64046]" >Free download</button>
                        <button className="ml-4 rounded-3xl bg-white text-[#ff6166] border-2 border-[#ff6166] text-base uppercase py-2 px-5 font-semibold hover:bg-[#ff6166] hover:text-white" >buy now</button>
                    </div>
                </div>
                <div className="text-center md:w-[60%] mt-10 md:mt-0">
                    Image or video
                </div>
            </div>

            <div className="mt-20 px-10">
                <div className="text-center">
                    <span className="text-black font-black text-3xl">
                        Powerful PDF tools, simple document solutions
                    </span>
                </div>
                <div className="mt-5 text-center">
                    {
                        buttonGroupData.map((item, index) => (
                            <HoverButton key={index} item={item} />
                        ))
                    }
                </div>
                <div className="mt-5 text-center">
                    <span className="text-black text-base font-medium">and many more</span>
                </div>
                <div className="mt-5 flex justify-center">
                    <IoIosArrowDown className="text-[#ff6166] animate-bounce text-3xl" />
                </div>
            </div>

            <div className="bg-gray-100 p-16 mt-5">
                <ToolGroup data={toolsGroupData} />
            </div>

            <div className="p-16">
                <div className="py-5 text-center">
                    <span className="text-black font-black text-3xl">Solve all your document problems with our simple</span>
                    <span className="text-[#e64046] font-black text-3xl"> PDF solution</span>
                </div>
                <div className="py-4 text-center">
                    <span className="text-lg">Soda PDF has all the tools & resources you need to manage files with ease.</span>
                </div>
                <div className="grid lg:grid-flow-col lg:grid-cols-4 gap-3">
                    {
                        soultionData.map((item, index) => (
                            <div key={index} className="p-4">
                                <div className="flex items-center mb-2">
                                    <item.icon className="text-3xl" style={{ color: item.color }} />
                                    <span className="text-lg font-bold ml-3">{item.title}</span>
                                </div>
                                <div className="text-gray-500 mb-2">
                                    {item.content}
                                </div>
                                <div>
                                    <Link to='' className="text-base font-medium">Learn More</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}