import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ScheduleSection = () => {
  return (
    <section className="py-12 px-8 bg-gray-50" id="schedule">
      <div className="container mx-auto">
        <h2 className="flex items-center text-4xl font-bold mb-12 pb-4 border-b border-gray-700">
          our <span className="text-black ml-3">schedule</span>
          <a href="#schedule" className="ml-auto text-black text-2xl">
            view all &gt;&gt;
          </a>
        </h2>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">upcoming matches TBA</h3>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
            <div className="p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <i className="fas fa-calendar-alt text-2xl text-gray-500"></i>
                <Link
                  href="https://docs.google.com/forms/d/1SLMUnDPs1egOftOEPhBIYGQjIfHDFganXp_BPiBFn_w/edit"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <i className="fas fa-clipboard-list"></i>
                  RSVP &gt;
                </Link>
              </div>
            </div>

            <div className="relative h-48">
              <Image
                src="/assets/images/rsvpcurtains.jpg"
                alt="RSVP"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
