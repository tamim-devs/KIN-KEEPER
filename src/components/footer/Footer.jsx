import React from 'react'
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[#295846] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-200 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-gray-200 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaInstagram size={18} />
          </div>
          <div className="bg-gray-200 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaFacebookF size={18} />
          </div>
          <div className="bg-gray-200 text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaXTwitter size={18} />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 border-t border-gray-400 pt-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer