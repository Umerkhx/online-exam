"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import React from "react"
import ServicesMegaMenu from "./ServicesMegaMenu"


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/order-now', label: 'Order Now' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-zinc-50 dark:bg-[#1A1A1D] sticky top-0 shadow-xl z-[99999]">
    <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between py-2">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={'/navbar-logo.png'} width={200} height={65} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1 gap-2">
          <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
                <ServicesMegaMenu />
              </NavigationMenuItem>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
     
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>

        <div className="hidden md:flex items-center">
          <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank">
            <Button className="bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-800 text-zinc-100 transition ease-in duration-200 delay-200">
              <MessageCircle className="mr-2" /> Chat with us
            </Button>
          </Link>
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
                className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ServicesMegaMenu />
            </div>
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank">
                <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <MessageCircle className="mr-2" /> Chat with us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
  )
}

export default Navbar