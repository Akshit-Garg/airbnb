import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home({ inspirationData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Akz Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-16">
          <h2 className="font-semibold text-3xl pb-8"> Inspiration for your next trip</h2>

          {/* Pull some data from a server -API Endpoints  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {inspirationData?.map((item) => (
            <SmallCard location={item.location} distance={item.distance} img={item.img} key={item.img} />
          ))}
          </div>
        </section>

        <section>
          <div className="font-semibold text-3xl py-5">
            <h2>Live Anywhere</h2>
          </div>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((eachcard) => (
              <MediumCard key={eachcard.img} img={eachcard.img} title={eachcard.title} />
            ))}
          </div>
        </section>
        
        <section>
          <LargeCard img="https://links.papareact.com/4cj" description="Wishlists curated by Airbnb"
          title="The Greatest Outdoors" buttonText="Get Inspired" />
        </section>
      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const inspirationData = await fetch("https://links.papareact.com/pyp").then(res => res.json());
  const cardsData= await fetch("https://links.papareact.com/zp1").then(res => res.json());

  return {
    props: {
      inspirationData, cardsData
    },
  }
}