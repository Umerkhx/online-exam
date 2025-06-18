import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { MailsIcon, MessageCircleCode, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TopBar() {
    const words = ['Exams',"Homework", "Quizzes", "Essays", "Projects"];
  return (
    <header className=" px-1 z-50 sticky w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="md:flex items-center  hidden">
            <div  className="lg:text-base text-[10px] font-semibold text-primary ">
            🎓Online Exam Relief Helps You in<FlipWords words={words} /> 
            </div>
          </div>

          <nav className=" flex md:justify-end justify-center  ">
            <Button
              aria-label="personal chat"
              className=" md:border-l-0  border-0 border-r-2 border-l-2 border-gray-200 dark:border-slate-600 rounded-none"
              variant="outline"
              size="lg"
            >
              <MessageCircleCode className="w-5 h-5 sm:mr-2" />
              <span className="hidden lg:inline">Personal Live Chat</span>
            </Button>

            <Link
              href={
                "https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                aria-label="whatsapp"
                className="border-0 border-r-2 border-gray-200 dark:border-slate-600 rounded-none"
                variant="outline"
                size="lg"
              >
                <Image
                  src={"/whatsapp.png"}
                  width={20}
                  height={20}
                  alt="whatsapp"
                  className=" sm:mr-2"
                ></Image>
                <span className="hidden lg:inline">Whatsapp Now</span>
              </Button>
            </Link>

            <Link
              href={"mailto:support@takingmyclassesonline.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                aria-label="mail"
                className="border-0 border-r-2 bborder-gray-200 dark:border-slate-600 rounded-none"
                variant="outline"
                size="lg"
              >
                <MailsIcon className="w-5 h-5 sm:mr-2" />
                <span className="hidden lg:inline">
                  support@onlineexamrelief.com
                </span>
              </Button>
            </Link>

            <Button
              aria-label="number"
              className=" border-0 border-r-2 border-gray-200 dark:border-slate-600 rounded-none"
              variant="outline"
              size="lg"
              asChild
            >
              <Link aria-label="Call us" href="tel:3197005034911">
                <PhoneCall className="w-5 h-5 sm:mr-2" />
                <span className="hidden lg:inline">
                Call Us +31 970 050 34911
                </span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default TopBar