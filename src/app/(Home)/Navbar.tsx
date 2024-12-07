"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { navLinks } from "../utils/navlinks"
import React from "react"


function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-zinc-50 dark:bg-slate-900 sticky top-0 shadow-xl z-50">
    <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between py-2">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src={'/logo (1).png'} width={200} height={200} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1 gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.dropdown.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{item.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>

        <div className="hidden md:flex items-center">
          <Button className="text-white">Chat with us</Button>
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
              <React.Fragment key={link.href}>
                {link.dropdown ? (
                  <>
                    <div className="font-medium px-3 py-2">{link.label}</div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 pl-6"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <ModeToggle />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
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