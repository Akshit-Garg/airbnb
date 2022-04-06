import React from 'react'
import { useRouter } from "next/router"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { format } from "date-fns"
import Infocard from '../components/Infocard'

function Search({ searchResults }) {

  const router = useRouter();
  const { location, noOfGuests, startDate, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <div>
            <p className="text-xs"> 300+ Stays - {range} - {noOfGuests} Guests </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {location} </h1>

            <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap select-none">
              <p className="clickMe">Cancellation flexibility</p>
              <p className="clickMe"> Type of Place </p>
              <p className="clickMe"> Price </p>
              <p className="clickMe"> Rooms and Beds </p>
              <p className="clickMe"> More Filters </p>
            </div>
          </div>

          <div>
            {searchResults.map(({ img, location, title, description, star, price, total, long, lat }) => (
              <Infocard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
                long={long}
                lat={lat} />
            ))}
          </div>

        </section>
        
      </main>



      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}
