import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-blue-100">
      <section className="py-12 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">quick links</h3>
              <div className="space-y-3">
                <Link href="#home" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Home
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Sign Up
                </Link>
                <Link href="#news" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  News
                </Link>
                <Link href="#schedule" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Schedule
                </Link>
                <Link href="#sports" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Sports
                </Link>
                <Link href="#bazebasketballleague" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Baze Basketball League
                </Link>
                <Link href="#roster" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Roster
                </Link>
                <Link href="#stats" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Stats
                </Link>
                <Link href="#videos" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Videos
                </Link>
                <Link href="#footer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Social Media
                </Link>
                <Link href="#rsvp" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  RSVP
                </Link>
                <Link href="#about" className="flex items-center gap-2 hover:text-white transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  About
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">extra links</h3>
              <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <i className="fas fa-arrow-right"></i>
                terms of use
              </Link>
            </div>

            <div id="footer">
              <h3 className="text-3xl font-bold mb-4">follow us</h3>
              <Link 
                href="https://www.instagram.com/baze_starlets/" 
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
                instagram
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-gray-600 text-center py-4">
        <p className="text-blue-100 text-xl">
          powered by onyinyechi stephanie dikeocha || all rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer