import React from 'react'

const Ipad = () => {
    return (
        <div className="hidden md:block relative w-full max-w-[912px] mx-auto aspect-[1.44] border-[12px] border-gray-800 dark:border-gray-800 bg-gray-800 rounded-[2rem] shadow-xl">
            {/* Power Button (left in landscape) */}
            <div className="absolute w-[4px] h-[12%] bg-gray-800 dark:bg-gray-800 left-[-14px] top-[8%] rounded-xl"></div>

            {/* Volume Buttons (top in landscape) */}
            <div className="absolute h-[4px] w-[8%] bg-gray-800 dark:bg-gray-800 top-[-13px] left-[10%] rounded-xl"></div>
            <div className="absolute h-[4px] w-[8%] bg-gray-800 dark:bg-gray-800 top-[-13px] left-[18%] rounded-xl"></div>

            {/* Screen */}
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center text-xl font-semibold">
                storyloom mockup
            </div>
        </div>
    )
}

export default Ipad