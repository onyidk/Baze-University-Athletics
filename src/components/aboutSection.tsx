import React from 'react'

const AboutSection = () => {
  return (
    <>
      <div 
        className="bg-cover bg-center py-32"
        style={{ backgroundImage: "url('/assets/images/nusaybah2.png')" }}
      >
        <h1 className="text-gray-500 text-6xl font-bold text-center">About Us</h1>
      </div>
      
      <section className="py-12 px-8" id="about">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex-1 min-w-0">
              <span className="text-4xl font-bold block mb-4">Welcome to our Sports Community</span>
              <h3 className="text-gray-500 text-5xl font-bold mb-6">baze sports</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-4 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
              </p>
              <a 
                href="#" 
                className="inline-block px-8 py-3 bg-gray-500 text-black rounded-xl font-medium hover:bg-blue-100 transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection