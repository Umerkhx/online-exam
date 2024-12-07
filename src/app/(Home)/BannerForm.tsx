"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeftCircle, ArrowLeftIcon, Loader, Loader2Icon, PanelLeftDashed} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { sendEmails } from '../(backend)/action/formAction'

function BannerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const [pending, setPending] = useState(false)



  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setPending(true);

      // Convert form data to FormData object
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);

      try {
          // Send the FormData to the EmailAction2 function
          const result = await sendEmails(null, formData);

          // Check for success or error in the response
          if (result.success) {
              router.push('/thanks');
          } else {
              console.error(result.error);
          }
      } catch (error) {
          console.error('Error submitting the form:', error);
      }
  };

  return (
    <div className="w-full max-w-md bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-xl">
    <form className="space-y-8 p-5" onSubmit={handleSubmit}>
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
            className=" border-0 border-b border-gray-200 rounded-none  px-0 shadow-none"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
            required
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
            className="border-0 border-b border-gray-200 rounded-none  px-0 shadow-none"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
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
          className="border-0 border-b border-gray-200 rounded-none  px-0 shadow-none outline-0"
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button
  disabled={pending}
  className={`relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
      transition ease-in duration-200 delay-200 text-white text-base rounded-full py-3 overflow-hidden group 
      ${pending ? 'opacity-70 cursor-not-allowed' : ''}`}
>
  <span className="relative flex items-center justify-center">
    {pending ? (
      <>
        <Loader2Icon className="animate-spin mr-2" />
        Submitting
      </>
    ) : (
      <>
      <span className='relative flex items-center justify-center'>
        Get Free Quote
        <span className="absolute left-full  transition-transform duration-500 ease-in-out transform group-hover:rotate-180 text-base ml-1">
          <ArrowLeftCircle/>
        </span>
        </span>
      </>
    )}
  </span>
</button>
    </form>
  </div>  
  )
}

export default BannerForm