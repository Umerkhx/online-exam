"use client"
import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeftIcon} from 'lucide-react'

function BannerForm() {
  return (
    <div className="w-full max-w-md bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-xl">
    <form className="space-y-8 p-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label 
            htmlFor="fullName" 
            className=" font-medium "
          >
            Full Name
          </Label>
          <Input
            id="fullName"
            className=" border-0 border-b border-gray-200 rounded-none focus:ring-0 px-0 shadow-none"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label 
            htmlFor="email" 
            className=" font-medium "
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="border-0 border-b border-gray-200 rounded-none focus:ring-0 px-0 shadow-none"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label 
          htmlFor="phone" 
          className=" font-medium "
        >
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          className="border-0 border-b border-gray-200 rounded-none focus:ring-0 px-0 shadow-none outline-0"
          placeholder="Enter your phone number"
        />
      </div>
      <Button
  className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition ease-in duration-200 delay-200 text-white text-base rounded-full py-6 overflow-hidden group"
>
  <span className="relative flex items-center justify-center">
    Get Free Quote
    <span
      className="absolute left-full transition-transform duration-300 ease-in-out transform group-hover:rotate-180 text-xl ml-2"
    >
      <ArrowLeftIcon/>
    </span>
  </span>
</Button>
    </form>
  </div>  )
}

export default BannerForm