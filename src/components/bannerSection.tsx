import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BannerSection = () => {
  const banners = [
    {
      image: "/assets/images/teamphoto.jpg",
      content: {
        span: "limited slots",
        title: "starlets"
      }
    },
    {
      image: "/assets/images/othersports.PNG", 
      content: {
        span: "limited slots",
        title: "football/badminton/table tennis/volleyball"
      }
    },
    {
      image: "/assets/images/boysteamphoto.jpg",
      content: {
        span: "limited slots",
        title: "bulldogs" 
      }
    }
  ]

  return (
    <section className="py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner, index) => (
          <div key={index} className="relative h-96 overflow-hidden group">
            <Image 
              src={banner.image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
              <span className="text-blue-100 text-xl font-bold block mb-2">
                {banner.content.span}
              </span>
              <h3 className="text-white text-2xl font-bold mb-4 pt-20">
                {banner.content.title}
              </h3>
              <Link 
                href="https://docs.google.com/forms/d/1jQhLQYVWiSpkaQGz7n9_Mg7rqIyyBuPN_pc3ieovhh4/edit"
                target="_blank"
                className="inline-block px-10 py-3 bg-gray-500 text-black font-bold rounded-lg hover:bg-black hover:text-gray-500 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BannerSection