// import React from 'react'

const BookCardShimmer = () => {
  return (
    <div className="p-2 glass shadow-lg rounded-xl flex flex-col gap-5 roboto-regular h-60 animate-pulse bg-gray-500">
    <div className="flex items-start  justify-start">
    <span className="font-semibold w-[35%]"></span>
    <h1 className=" w-[65%]"></h1>
    </div>
    <div className="flex items-start  justify-start">
    <span className="font-semibold"></span>
    <h1 className=""></h1>
    </div>
    
                    <div className="rounded-lg w-full bg-gray-500 p-1 font-semibold">
                                           </div>
                    </div>
  )
}

export default BookCardShimmer