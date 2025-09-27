import React from 'react'
import Image from 'next/image'
import { NewsItem } from '@/types'

const NewsSection = () => {
  const news: NewsItem[] = [
    {
      id: 1,
      title: 'new potential players are enrolling!',
      image: '/assets/images/newplayers.jpg',
    },
    {
      id: 2,
      title: 'baze suffers 0-4 defeat in kickoff against nile',
      image: '/assets/images/finalscore.jpg',
    },
    {
      id: 3,
      title: 'first practice of the season commences on the 22nd',
      image: '/assets/images/practice.jpg',
    },
  ]

  return (
    <section className="py-12 px-8" id="news">
      <div
        className="bg-cover bg-center py-32 mb-8"
        style={{ backgroundImage: "url('/assets/images/nusaybah2.png')" }}
      >
        <h1 className="text-gray-500 text-6xl font-bold text-center">News</h1>
      </div>

      <div className="container mx-auto">
        <h2 className="flex items-center text-4xl font-bold mb-12 pb-4 border-b border-gray-700">
          the <span className="text-black ml-3">latest</span>
          <a href="#news" className="ml-auto text-black text-2xl">
            view all &gt;&gt;
          </a>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(item => (
            <div
              key={item.id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={240}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 capitalize">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
