"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import React from "react"
import ServicesMegaMenu from "./ServicesMegaMenu"
import { cn } from "@/lib/utils"


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/order-now', label: 'Order Now' },
]

const services = [
  {
    category: "Exam Assistance Services",
    href: "/exam-assistance",
    subcategories: [
      { name: "Mock Exams & Practice Tests", href: "/exam-assistance/practice-test-preparation" },
      { name: "Timed Test Support", href: "/exam-assistance/timed-test-support" },
      { name: "Live Exam Support", href: "/exam-assistance/live-exam-help" },
    ],
  },
  {
    category: "Subject-Specific Services",
    href: "/subject-specific",
    subcategories: [
      { name: "Math Exam Help", href: "/subject-specific/math-exam-help" },
      { name: "Science Exam Help", href: "/subject-specific/science-exam-help" },
      { name: "Engineering Exam Help", href: "/subject-specific/engineering-exam-help" },
      { name: "Law Exam Help", href: "/subject-specific/law-exam-help" },
      { name: "Business & Finance Exam Help", href: "/subject-specific/business-finance-exam-help" },
      { name: "Humanities Exam Help", href: "/subject-specific/humanities-exam-help" },
    ],
  },
  {
    category: "Assignment Help Services",
    href: "/assignment-help",
    subcategories: [
      { name: "Essay & Paper Writing Help", href: "/assignment-help/essay-paper-writing" },
      { name: "Project Support", href: "/assignment-help/project-support" },
    ],
  },
  {
    category: "Test Preparation Packages",
    href: "/test-preparation",
    subcategories: [
      { name: "Personalized Study Plans", href: "/test-preparation/personalized-study-plans" },
      { name: "One-on-One Tutoring", href: "/test-preparation/one-on-one-tutoring" },
    ],
  },
  {
    category: "Emergency Exam Support",
    href: "/emergency-exam-support",
    subcategories: [
      { name: "Last-Minute Exam Help", href: "/emergency-exam-support/last-minute-help" },
      { name: "Overnight Preparation Assistance", href: "/emergency-exam-support/overnight-preparation" },
    ],
  },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-zinc-50 dark:bg-[#1A1A1D] sticky top-0 shadow-xl z-[99999]">
      <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-2">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img className="lg:w-44 lg:h-16 w-32 h-12" src={'/navbar-logo.png'} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1 gap-2">
            <NavigationMenu>
              <NavigationMenuList>
            

                <NavigationMenuItem>
                  <Link href={'/'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <ServicesMegaMenu />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={'/about-us'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={'/reviews'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Reviews
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={'/blogs'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <Link href={'/contact-us'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <Link href={'/order-now'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Order Now
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>

          <div className="hidden lg:flex items-center">
            <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank">
              <Button className="bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-800 text-zinc-100 transition-all duration-400 delay-150 hover:rounded-3xl">
                <MessageCircle className="mr-2" /> Chat with us
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
            >
              <span className="sr-only">Services</span>
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
            className="lg:hidden overflow-hidden z-50"
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

              <div className="px-2 py-1">
                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden bg-zinc-800 hover:bg-blue-400 hover:text-zinc-50 dark:bg-zinc-200 dark:hover:text-blue-500 dark:text-zinc-800 text-zinc-200 px-2 py-2 rounded-lg font-semibold"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? "Close Menu" : "Service Menu"}
                </button>

                {/* Overlay for Mobile */}
                {isMenuOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                  ></div>
                )}

                {/* Navigation Menu */}
                <div
                  className={cn(
                    "fixed inset-y-0 left-0 w-4/5 bg-white text-zinc-800 z-50 transform lg:static lg:transform-none lg:block lg:w-auto transition-transform",
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                  )}
                >
                  <div className="p-4 space-y-4 lg:flex lg:space-y-0 lg:space-x-4">
                    {services.map((service) => (
                      <div key={service.category} className="lg:w-auto">
                        {/* Main Category */}
                        <div className="flex items-center justify-between w-full px-4 py-2 text-left text-sm rounded-md border lg:border-none hover:bg-gray-100">
                          <Link
                            href={service.href}
                            className="text-left  hover:text-blue-500 flex-1"
                          >
                            {service.category}
                          </Link>
                          <button
                            className="ml-2 flex items-center"
                            onClick={() =>
                              setActiveCategory(
                                activeCategory === service.category ? null : service.category
                              )
                            }
                          >
                            {activeCategory === service.category ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>
                        </div>

                        {/* Subcategories */}
                        {activeCategory === service.category && (
                          <ul className="mt-2 space-y-1 pl-4">
                            {service.subcategories.map((subcat) => (
                              <li key={subcat.name}>
                                <Link
                                  href={subcat.href}
                                  className="block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                  {subcat.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
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