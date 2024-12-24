import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

function TestFaq() {
  return (
    <div className='mx-auto max-w-screen-xl my-20'>
    <h2 className='text-center text-5xl font-extrabold'>Frequently Asked Questions</h2>
    <div className='grid lg:grid-cols-2 grid-cols-1 p-4 gap-3 mt-5'>
        <div>
            <Accordion className='space-y-3' type="single" collapsible>
                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-1">
                    <AccordionTrigger className='text-lg font-semibold'>What are mock exams, and how do they help in test preparation?</AccordionTrigger>
                    <AccordionContent>
                    Mock exams simulate the actual test environment, helping students familiarize themselves with the exam format, manage time effectively, and identify areas that need improvement.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-2">
                    <AccordionTrigger className='text-lg font-semibold'>How should I incorporate mock exams into my study schedule?</AccordionTrigger>
                    <AccordionContent>
                    Take mock exams regularly, preferably after completing a section or topic. Use them to evaluate your progress and adjust your study plan accordingly.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-3">
                    <AccordionTrigger className='text-lg font-semibold'>How often should I take mock exams while preparing for a test?</AccordionTrigger>
                    <AccordionContent>
                    It depends on your preparation timeline. Ideally, take one mock exam per week in the beginning and increase the frequency as the exam date approaches.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-4">
                    <AccordionTrigger className='text-lg font-semibold'>Are mock exams harder than the actual test?</AccordionTrigger>
                    <AccordionContent>
                    Mock exams can vary in difficulty. Some are intentionally harder to push you to prepare more thoroughly, while others match the actual test's difficulty.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>




        <div>
            <Accordion className='space-y-3' type="single" collapsible>
                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-5">
                    <AccordionTrigger className='text-lg font-semibold'>Can mock exams predict my actual test score?</AccordionTrigger>
                    <AccordionContent>
                    Mock exams provide a general indication of your performance but may not perfectly predict your score. Use them as a tool to assess strengths and weaknesses.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-6">
                    <AccordionTrigger className='text-lg font-semibold'> What should I do after taking a mock exam?</AccordionTrigger>
                    <AccordionContent>
                    Review your answers, analyze mistakes, and focus on improving weak areas. Take note of recurring patterns or concepts that need more attention.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-7">
                    <AccordionTrigger className='text-lg font-semibold'>How can I reduce stress while taking mock exams?</AccordionTrigger>
                    <AccordionContent>
                    Treat mock exams as a learning tool, not a final judgment. Practice relaxation techniques, maintain a consistent schedule, and approach them with a growth mindset.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className='dark:bg-gradient-to-l dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-l from-zinc-300 to-[#77BBB8] p-2 rounded-lg' value="item-8">
                    <AccordionTrigger className='text-lg font-semibold'>Should I take mock exams under timed conditions?</AccordionTrigger>
                    <AccordionContent>
                    Yes, simulate the actual test conditions as closely as possible. This helps build stamina, improves time management, and prepares you for the real test environment.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>

    </div>
</div>
  )
}

export default TestFaq