"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Loader2Icon } from 'lucide-react'
import EmailAction2 from '../(backend)/action/emailAction2'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
    formData.append('phone', phone);
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
    <section id="contact-form" className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-slate-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter  md:text-5xl ">
              Send us a Message
            </h2>
            <p className="mx-auto max-w-[550px] text-gray-600 md:text-xl text-sm dark:text-gray-400">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-[700px] shadow-2xl">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-zinc-100 to-sky-100 dark:from-gray-900 dark:to-sky-900 rounded-t-lg">
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription className="text-base text-gray-950 dark:text-gray-100">Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                    <Input 
                      id="first-name" 
                      name='name' 
                      placeholder="John Doe" 
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 border border-gray-200 dark:border-gray-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                    <Input 
                      id="last-name" 
                      name='subject' 
                      placeholder="How can we help?" 
                      onChange={(e) => setSubject(e.target.value)}
                      className="h-12 border border-gray-200 dark:border-gray-700"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                  <Input 
                    id="email" 
                    name='email' 
                    placeholder="johndoe@example.com" 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border border-gray-200 dark:border-gray-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone Number</label>
                  <Input 
                    id="phone" 
                    name='phone' 
                    placeholder="Enter your Phone Number" 
                    type="email" 
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 border border-gray-200 dark:border-gray-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                  <Textarea 
                    className="min-h-[120px] resize-none" 
                    onChange={(e) => setMessage(e.target.value)} 
                    id="message" 
                    name='message' 
                    placeholder="Tell us more about your needs..."
                    required
                  />
                </div>
                <Button 
                  className="w-full h-12 bg-sky-600 hover:bg-sky-700 dark:bg-sky-800 dark:hover:bg-sky-900 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02]" 
                  type="submit"
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      <Loader2Icon className="animate-spin mr-2 h-5 w-5" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactForm