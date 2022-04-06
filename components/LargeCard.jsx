import React from 'react'
import Image from 'next/image'

function LargeCard({img, description, title, buttonText}) {
  return (
    <div className="relative my-16 cursor-pointer">
        {/* Image */}
      <div className="relative h-96 min-w-[300px]">
          <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      {/* Absolute text */}
      <div className="absolute top-32 left-12">
          <h2 className=" text-4xl w-64 mb-3"> {title} </h2>
          <h3> {description} </h3>

          <button className="bg-gray-900 text-white mt-5 rounded-md py-2 px-4"> 
          {buttonText} </button>
      </div>
    </div>
  )
}

export default LargeCard
