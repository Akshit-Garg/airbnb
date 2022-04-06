import React from 'react'
import Image from 'next/image'

function Banner() {
  let flexible = "I'm flexible"
  return (
    <div className="relative h-[450px] sm:h-[570px] md:h-[670] lg:h-[770] xl:h-[800] 2xl:h-[900]">
      <Image
        src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" alt="Jumbo-image"
      />

      <div className="absolute top-2/3 text-center w-full ">
        <p className="text-sm sm:text-lg"> Not sure where to go? Perfect. </p>
  

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          {flexible}
        </button>


      </div>

    </div>
  )
}

export default Banner