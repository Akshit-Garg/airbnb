import React from 'react';
import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header({placeholder}) {
    const [inputSearch, setInputSearch] = React.useState("");
    const [noOfGuests, setNoOfGuests] = React.useState(1);

    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const router = useRouter() ;

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setInputSearch("")
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: inputSearch,
                noOfGuests,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            }
        })
    };

  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10">

        {/* Left Section -- Logo */}
        <div onClick={() => router.push("/")} className="relative h-10 flex items-center cursor-pointer">
            <Image 
                src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"
            />
        </div>

        {/* Middle Section -- Search Bar */}
        <div className="flex items-center rounded-full md:shadow-sm md:border-2 py-1.5 lg:mx-8 flex-grow">
            <input value={inputSearch} onChange={(event) => setInputSearch(event.target.value)} 
            className="flex-grow outline-none pl-3 bg-transparent placeholder-gray-400 text-gray-600 text-sm" 
            type="text" 
            placeholder={placeholder || "Start your search"} />
            <SearchIcon className="hidden md:inline h-8 bg-red-400 text-white rounded-full cursor-pointer p-1.5 md:mx-2" />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end space-x-4 text-gray-500 ">
            <p className="hidden md:inline-flex cursor-pointer" > Become a host </p>
            <GlobeAltIcon className="h-6 cursor-pointer" />

            <div className="flex items-center rounded-full border-2 p-2 space-x-2">
                <MenuIcon className="h-6 cursor-pointer" />
                <UserCircleIcon className="h-6 cursor-pointer" />
            </div>
        </div>

        {inputSearch && (
            <div className="flex flex-col col-span-3 mx-auto"> 
               <DateRangePicker ranges={[selectionRange]} minDate={new Date()}
                   rangeColors={["#fd5b61"]} onChange={handleSelect}
               />

               <div className="flex items-center border-b mb-4">
                   <h2 className="font-semibold text-2xl flex-grow">
                      Number of Guests
                   </h2>

                   <UsersIcon className="h-5"/>
                   <input className="w-12 pl-2 text-red-400 outline-none text-lg" min={1}
                      type="number" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} />
               </div>

               <div className="flex">
                   <button className="flex-grow text-gray-500" onClick={resetInput}> Cancel </button>
                   <button className="flex-grow text-red-400" onClick={search}> Submit </button>
               </div>
            </div>

            
        )}


    </header>
)}

export default Header

