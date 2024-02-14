import React from 'react';
import HoverButton from "../../components/HoverButton"

const ToolList = ({ data }) => {
    return (
        <div className='bg-white p-5 shadow-md flex flex-col justify-between h-full'>
            <div className='flex items-center'>
                <data.icon className='text-3xl' style={{ color: data.color }} />
                <span className='font-bold ml-2'>{data.tool}</span>
            </div>
            <div className='py-5'>
                <span className='text-sm text-gray-700'>{data.content}</span>
            </div>
            <div className='flex justify-between items-center'>
                <HoverButton 
                    item={{
                        color: data.color,
                        text: 'Download app'
                    }}
                    isTool={true}
                />
                <HoverButton 
                    item={{
                        color: '',
                        text: 'Try Online'
                    }}
                    isReverse={true}
                    isTool={true}
                />
            </div>
        </div>
    )
}

const SubGroup = ({ subData }) => {
    return (
        <div className='mb-8'>
            <div className='mb-3'>
                <h1 className='font-bold text-xl'>{subData.title}</h1>
                <span className='italic text-gray-600'>{subData.subTitle}</span>
            </div>
            <div className='grid lg:grid-flow-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    subData.data.map((item, index) => (
                        <ToolList key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

const ToolGroup = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => (
                    <SubGroup key={index} subData={item} />
                ))
            }
        </>
    );
}

export default ToolGroup