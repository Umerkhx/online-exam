import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function TimedFaq() {
  return (
    <div className='mx-auto max-w-screen-xl lg:mt-16 lg:mb-32 mt-5 mb-20'>
    <h2 className='text-center lg:text-5xl text-3xl font-extrabold'>Frequently Asked Questions</h2>
    <div className='grid lg:grid-cols-2 grid-cols-1 p-4 gap-3 mt-5'>
        <div>
        <Accordion className='space-y-3' type="single" collapsible defaultValue='item-1'>
    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-1">
        <AccordionTrigger className='md:text-lg text-base '>What are timed tests, and how can they improve my test preparation?</AccordionTrigger>
        <AccordionContent className='text-sm md:text-base'>
            Timed tests replicate the conditions of actual exams, helping students practice managing time, improve their pacing, and pinpoint areas for improvement.
        </AccordionContent>
    </AccordionItem>

    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-2">
        <AccordionTrigger className='md:text-lg text-base '>How should I integrate timed tests into my study routine?</AccordionTrigger>
        <AccordionContent className='text-sm md:text-base'>
            Incorporate timed tests regularly, especially after completing a key topic or subject. Use them to track your progress and adjust your study schedule based on your results.
        </AccordionContent>
    </AccordionItem>

    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-3">
        <AccordionTrigger className='md:text-lg text-base '>How often should I take timed tests during my preparation?</AccordionTrigger>
        <AccordionContent className='text-sm md:text-base'>
            Start by taking one timed test per week. As your exam date approaches, increase the frequency of timed tests to build stamina and become more comfortable with time management.
        </AccordionContent>
    </AccordionItem>

    <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-4">
        <AccordionTrigger className='md:text-lg text-base '>Are timed practice tests more challenging than the actual exam?</AccordionTrigger>
        <AccordionContent className='text-sm md:text-base'>
            Timed tests may vary in difficulty. Some are designed to push you harder, encouraging thorough preparation, while others mirror the difficulty of the actual exam.
        </AccordionContent>
    </AccordionItem>

</Accordion>
</div>

<div>
    <Accordion className='space-y-3' type="single" collapsible>
        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-5">
            <AccordionTrigger className='md:text-lg text-base '>Can timed tests predict my performance on the real exam?</AccordionTrigger>
            <AccordionContent className='text-sm md:text-base'>
                Timed tests can provide a good indication of your readiness, but they may not predict your exact score. Use them to gauge your strengths and focus on areas that need improvement.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-6">
            <AccordionTrigger className='md:text-lg text-base '>What should I do after completing a timed test?</AccordionTrigger>
            <AccordionContent className='text-sm md:text-base'>
                After completing a timed test, review your answers, analyze your mistakes, and focus on improving areas where you struggled. Identifying recurring mistakes will help guide your study focus.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-7">
            <AccordionTrigger className='md:text-lg text-base '>How can I reduce anxiety while taking timed tests?</AccordionTrigger>
            <AccordionContent className='text-sm md:text-base'>
                Treat timed tests as learning tools, not as final evaluations. Use relaxation techniques, maintain a regular study schedule, and approach tests with a positive mindset and confidence in your progress.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-8">
            <AccordionTrigger className='md:text-lg text-base '>Should I simulate real test conditions when taking timed practice exams?</AccordionTrigger>
            <AccordionContent className='text-sm md:text-base'>
                Yes, it’s essential to simulate the actual test environment by adhering to strict time limits. This helps you build mental stamina, refine your time management skills, and better prepare for the real exam experience.
            </AccordionContent>
        </AccordionItem>

    </Accordion>
            
        </div>

    </div>
</div>
  )
}

export default TimedFaq