import React from 'react';

const LoadingSpinner = ({text}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 backdrop-blur-sm bg-opacity-50">
      <div className="flex items-center justify-center p-4">
        <div className="flex space-x-1 justify-center items-end ">
          <div className='mr-1'>
            <span className='text-[#ff6166] font-bold'>
                {text}
            </span>
          </div>
          <div className="w-1 h-1 rounded-full animate-bounce bg-[#ff6166]"></div>
          <div className="w-1 h-1 rounded-full animate-bounce bg-[#ff6166]"></div>
          <div className="w-1 h-1 rounded-full animate-bounce bg-[#ff6166]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;