import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'

function Faq() {
    return (
        <div className='mt-20 mx-auto max-w-screen-xl'>
            <h2 className='text-center font-extrabold text-5xl '>Frequently Inquired Questions</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-4 mt-5 '>
                <div className=''>
                    <Image className='rounded-xl' src={'/faq-1.webp'} width={600} height={550} alt='faq'></Image>
                </div>
                <div className='col-span-2'>
                    <Accordion className='space-y-3' type="single" collapsible>
                        <AccordionItem className='dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8]  p-2 rounded-lg' value="item-1">
                            <AccordionTrigger className='text-lg font-semibold'>Is it Ethical to Seek Assistance from Online Class Relief?</AccordionTrigger>
                            <AccordionContent>
                               Absolutely! We’re a trusted service with top-notch tutors and a money-back guarantee for your peace of mind.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8]  p-2 rounded-lg' value="item-2">
                            <AccordionTrigger className='text-lg font-semibold'>Is It Safe to Hire Someone to Take My Online Exam?</AccordionTrigger>
                            <AccordionContent>
                            Absolutely! Online Exam Relief is a completely secure platform for hiring help with your online classes. We prioritize data confidentiality and never share your information with anyone.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8]  p-2 rounded-lg' value="item-3">
                            <AccordionTrigger className='text-lg font-semibold'>How Can I Hire Online Exam Relief to Take My Online Exam?</AccordionTrigger>
                            <AccordionContent>
                            Share your requirements with Online Class Exam, including your field of study, syllabus, or online class login details. After reviewing your coursework, we’ll provide a final quote. Once agreed, we’ll handle the rest!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8]  p-2 rounded-lg' value="item-4">
                            <AccordionTrigger className='text-lg font-semibold'>Is it possible to pay someone to take my online exam?</AccordionTrigger>
                            <AccordionContent>
                           Absolutely! Our "Do My Online Exam for Me" Service Makes It Easy. We offer expert online class assistance for all major subjects, with tutors ready to take your online test at a moment’s notice.
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq