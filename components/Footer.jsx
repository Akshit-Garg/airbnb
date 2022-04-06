import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 py-12 px-32
     bg-gray-100">
      <div className="text-gray-600 text-xs space-y-4 pb-3 border-b lg:border-none">
        <h2 className="font-bold text-black"> Support </h2>
        <p> Help Centre </p>
        <p> Safety information </p>
        <p> Cancellation options </p>
        <p> Supporting people with disabilities </p>
        <p> Report a neighbourhood concern </p>
      </div>

      <div className="text-gray-600 text-xs space-y-4 pb-3 border-b lg:border-none">
        <h2 className="font-bold text-black"> Community </h2>
        <p> Airbnb.org: disaster relief housing </p>
        <p> Support Afghan refugees </p>
        <p> Combating discrimination </p>
      </div>

      <div className="text-gray-600 text-xs space-y-4 pb-3 border-b lg:border-none">
      <h2 className="font-bold text-black"> Hosting </h2>
        <p> Try hosting </p>
        <p> AirCover: protection for Hosts </p>
        <p> Explore hosting resources </p>
        <p> Visit our community forum </p>
        <p> How to host responsibly </p>
      </div>

      <div className="text-gray-600 text-xs space-y-4 pb-3 border-b lg:border-none">
      <h2 className="font-bold text-black"> About </h2>
        <p> Newsroom </p>
        <p> Learn about new features </p>
        <p> Letter from our founders </p>
        <p> Careers </p>
        <p> Investors </p>
        <p> Airbnb Luxe </p>
      </div>

    </div>   
  )
}

export default Footer
