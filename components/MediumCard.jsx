import React from 'react';
import Image from 'next/image';

function MediumCard(props) {
    const {img, title} = props;
  return (
    <div className="cursor-pointer">
      <div className="relative h-80 w-80 transform transition hover:scale-105 duration-300 ease-out">
          <Image src={img} layout="fill" className="rounded-xl" />
      </div>

      <h3 className="text-xl mt-2">
        {title}
      </h3>
    </div>
  )
}

export default MediumCard
