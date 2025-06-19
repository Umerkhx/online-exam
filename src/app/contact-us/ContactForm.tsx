"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import EmailAction2 from '../(backend)/action/emailAction2'
import { Loader2Icon } from 'lucide-react'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const [pending, setPending] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    // Convert form data to FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      // Send the FormData to the EmailAction2 function
      const result = await EmailAction2(null, formData);

      // Check for success or error in the response
      if (result.success) {
        router.push('/thank-you-for-contact');
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  return (
    <section className=" w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-zinc-950 dark:to-slate-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[700px] mt-12 shadow-xl">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                    <Input id="first-name" name='name' placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                    <Input id="last-name" name='subject' placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                  <Input id="email" name='email' placeholder="johndoe@example.com" type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                  <Textarea className="min-h-[100px]" onChange={(e) => setMessage(e.target.value)} id="message" name='message' placeholder="Enter your message here" />
                </div>
                <Button className="w-full dark:text-black text-white" type="submit">
                  {pending ? (
                    <>
                      <Loader2Icon className="animate-spin mr-2 h-5 w-5" />{" "}
                      <p>Submitting...</p>
                    </>
                  ) : (
                    "Send Message"
                  )}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
    </section>
  )
}

export default ContactForm