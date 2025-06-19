'use client'

import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CookieDialog } from './CookieDialog'

export function FloatingContact() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(true)


  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("customCookies");
    if (!hasAcceptedCookies) {
      setIsDialogOpen(true); // Open the dialog if cookies have not been accepted
    }
  }, []);

  const handleItemHover = (item: string) => {
    setActiveItem(item)
  }

  const handleItemLeave = () => {
    setActiveItem(null)
  }

  return (
    <div className="fixed left-1 top-2/3 -translate-y-1/2 flex flex-col gap-5 z-50 lg:scale-95 scale-75">
      {/* WhatsApp */}
      <div
        className={`group relative flex items-center transition-transform duration-300 ${activeItem === 'whatsapp' ? 'scale-110' : ''}`}
        onMouseEnter={() => handleItemHover('whatsapp')}
        onMouseLeave={handleItemLeave}
      >
        <Link
          href="https://wa.me/3197005034911?text=Hi, Do you Need help? with your online exam? Let us know how we can assist you!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-white"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </Link>
        <span className={`absolute left-full ml-3 px-4 py-2 bg-white text-green-700 rounded-lg shadow-md font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeItem === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} group-hover:opacity-100 group-hover:translate-x-0`}>
          WhatsApp Us
        </span>
      </div>

      {/* Phone */}
      <div
        className={`group relative flex items-center transition-transform duration-300 ${activeItem === 'phone' ? 'scale-110' : ''}`}
        onMouseEnter={() => handleItemHover('phone')}
        onMouseLeave={handleItemLeave}
      >
        <Link
          href="tel:3197005034911"
          className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          <Phone className="w-7 h-7 text-white" />
        </Link>
        <span className={`absolute left-full ml-3 px-4 py-2 bg-white text-blue-700 rounded-lg shadow-md font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeItem === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} group-hover:opacity-100 group-hover:translate-x-0`}>
          Call Us
        </span>
      </div>

      {/* Email */}
      <div
        className={`hidden md:flex group relative items-center transition-transform duration-300 ${activeItem === 'email' ? 'scale-110' : ''}`}
        onMouseEnter={() => handleItemHover('email')}
        onMouseLeave={handleItemLeave}
      >
        <Link
          href="#"
          className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          <Mail className="w-7 h-7 text-white" />
        </Link>
        <span className={`absolute left-full ml-3 px-4 py-2 bg-white text-red-700 rounded-lg shadow-md font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeItem === 'email' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} group-hover:opacity-100 group-hover:translate-x-0`}>
          Email Us
        </span>
      </div>
      {/* <CookieDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} /> */}
    </div>
  )
}

export default FloatingContact