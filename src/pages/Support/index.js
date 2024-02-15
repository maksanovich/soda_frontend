import React from "react"

export default function Support() {
    return (
        <div>
            <div className="bg-gray-100 py-20">
                <div className="text-center m-auto max-w-[500px] px-3">
                    <h1 className="font-black text-xl md:text-5xl text-black">Got questions?</h1>
                    <h1 className="font-black text-xl md:text-5xl text-black">We're here to help!</h1>
                    <p className="my-5 text-gray-500">Search our Knowledge Base articles or contact one of our support agents to get the answers you need.</p>
                    <div className="mt-10 leading-none">
                        <span className="text-xs">
                            Avanquest processes the data collected to respond to your request for information, based on your consent and in accordance with our. 
                        </span>
                        <a href="#" className="text-xs text-blue-600"> Privacy Policy</a>
                    </div>
                    <button className="uppercase bg-[#ff6166] text-white px-12 py-3 text-lg rounded-3xl mt-5 hover:opacity-80">contact us</button>
                </div>
            </div>
        </div>
    )
}