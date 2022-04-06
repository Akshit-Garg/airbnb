import React from 'react'
import Image from "next/image"
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function Infocard(props) {
    const { img, location, title, description, star, price, total, long, lat } = props;

    return (
        <div className="flex cursor-pointer px-3 py-7 border-b hover:opacity-80 hover:shadow-lg pr-4 transition
        duration-200 ease-out first:border-t">
            <div className="relative flex-shrink-0 h-28 w-48 md:h-52 md:w-80">
                <Image src={img} alt="room-pic" layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>

            <div className="flex flex-grow pl-5 flex-col">
                <div className="flex justify-between">
                    <p> {location} </p>
                    <HeartIcon className="h-7" />
                </div>
                 
                <h2 className="text-xl"> {title} </h2>
                <div className="border-b p-2 w-10" />
                <p className="text-sm pt-2 text-gray-500 flex-grow"> {description} </p>

                <div className="flex justify-between pt-5 items-end">  
                    <p className="flex items-center"> 
                       <StarIcon className="h-5 text-red-400"/>
                       {star} 
                    </p>

                    <div>
                        <p className="text-xl lg:text-2xl font-semibold pb-2"> {price} </p>
                        <p className="text-right font-extralight"> {total} </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Infocard

//infy certified L1 jr. web programmer
