"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/our-process", label: "Our Process" },
  { href: "/contact", label: "Contact Us" },
]

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className=" bg-zinc-50 dark:bg-zinc-900 sticky top-0 shadow-md z-50">
    <div className="max-w-7xl bg-transparent  mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between py-2">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src={'/logo (1).png'} width={200} height={200} alt="logo"></Image>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className=" px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
           <ModeToggle/>
        </div>

        <div className="hidden md:flex items-center">
          <Button>Chat with us</Button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <AnimatePresence initial={false} mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="block h-6 w-6" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden z-50"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <ModeToggle/>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 ">
            <div className="px-2">
              <Button className="w-full " onClick={() => setIsMobileMenuOpen(false)}>
                Chat with us
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
  )
}

export default Navbar