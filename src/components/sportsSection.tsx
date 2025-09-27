import React from 'react'
import Image from 'next/image'

const SportsSection = () => {
  const sports = [
    { name: 'Basketball', image: '/assets/images/basketball.png' },
    { name: 'Football', image: '/assets/images/football.png' },
    { name: 'Badminton', image: '/assets/images/badmitton.jpg' },
    { name: 'Table Tennis', image: '/assets/images/table tennis.jpg' },
    { name: 'Volleyball', image: '/assets/images/volleyball.jpg' },
  ]

  return (
    <section className="py-12 px-8" id="sports">
      <div className="container mx-auto">
        <h2 className="flex items-center text-4xl font-bold mb-12 pb-4 border-b border-gray-700">
          <span className="text-black">sports</span>
          <a href="#sports" className="ml-auto text-black text-2xl">
            view all &gt;&gt;
          </a>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sports.map((sport, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 box-shadow-custom border border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SportsSection
