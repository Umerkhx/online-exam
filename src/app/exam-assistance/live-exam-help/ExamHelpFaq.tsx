import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function ExamHelpFaq() {
  return (
    <div className='mx-auto max-w-screen-xl lg:mt-16 lg:mb-32 mt-5 mb-20 '>
    <h2 className='text-center lg:text-5xl text-3xl font-extrabold px-4'>Frequently Asked Questions</h2>
    <div className='grid lg:grid-cols-2 grid-cols-1 p-4 gap-3 mt-5'>
        <div>
        <Accordion className='space-y-3' type="single"  collapsible defaultValue='item-1'>
  <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-1">
    <AccordionTrigger className='md:text-lg text-base'>What is live exam help, and how can it assist me?</AccordionTrigger>
    <AccordionContent className='text-sm md:text-base'>
      Live exam help offers real-time guidance during your exam, providing support with difficult questions, clarifications, and time management strategies to help you perform your best.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-2">
    <AccordionTrigger className='md:text-lg text-base'>How do I access live exam help during my exam?</AccordionTrigger>
    <AccordionContent className='text-sm md:text-base'>
      You can access live exam help through an online platform by logging in and requesting real-time assistance. A tutor will be available to support you with any questions or challenges you face during the exam.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-3">
    <AccordionTrigger className='md:text-lg text-base'>What kind of support is available through live exam help?</AccordionTrigger>
    <AccordionContent className='text-sm md:text-base'>
      Live exam help can include answering specific questions, clarifying difficult concepts, and providing advice on time management, all aimed at helping you improve your exam performance.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-4">
    <AccordionTrigger className='md:text-lg text-base'>Can I use live exam help for any type of exam?</AccordionTrigger>
    <AccordionContent className='text-sm md:text-base'>
      Yes, live exam help can be used for various types of exams, including written, multiple-choice, and oral exams, across different subjects like law, engineering, and business.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>

<div>
<Accordion className='space-y-3' type="single" collapsible>
    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-5">
      <AccordionTrigger className='md:text-lg text-base'>How do I make the most of live exam help?</AccordionTrigger>
      <AccordionContent className='text-sm md:text-base'>
        To maximize the benefits, be clear about the areas where you need assistance, ask specific questions, and take notes during the session for future reference.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-6">
      <AccordionTrigger className='md:text-lg text-base'>Is live exam help available for every subject?</AccordionTrigger>
      <AccordionContent className='text-sm md:text-base'>
        Yes, live exam help is available for a wide range of subjects. You can request assistance for subjects like mathematics, literature, physics, business, and more.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-7">
      <AccordionTrigger className='md:text-lg text-base'>How can live exam help reduce exam anxiety?</AccordionTrigger>
      <AccordionContent className='text-sm md:text-base'>
        Live exam help can ease anxiety by providing real-time guidance, clearing doubts, and helping you feel more confident in your exam strategy.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-8">
      <AccordionTrigger className='md:text-lg text-base'>Can live exam help improve my exam performance?</AccordionTrigger>
      <AccordionContent className='text-sm md:text-base'>
        Yes, by offering targeted help and helping you better manage your time and stress, live exam help can improve your overall exam performance.
      </AccordionContent>
    </AccordionItem>

  </Accordion>
        </div>

    </div>
</div>
  )
}

export default ExamHelpFaq