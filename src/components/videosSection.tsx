import React from 'react'

const VideosSection = () => {
  return (
    <section className="py-12 px-8" id="videos">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Team <span className="text-black">Videos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <video controls className="w-full h-auto">
              <source src="/assets/videos/highlights.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Add more video containers as needed */}
        </div>
      </div>
    </section>
  )
}

export default VideosSection
