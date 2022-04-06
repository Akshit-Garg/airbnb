import React from 'react';
import Image from 'next/image';

function SmallCard(props) {
    const {location, distance, img} = props;
  return (
    <div className="flex items-center mt-4 m-2 space-x-4 cursor-pointer rounded-lg
     hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
    {/* Left Portion */}
      <div className="h-16 w-16 relative">
          <Image src={img} layout="fill" className="rounded-lg"/>
      </div>

    {/* Right Portion */}
      <div>
          <h2> {location} </h2>
          <h3> {distance} </h3>
      </div>
    </div>
  )
}

export default SmallCard
