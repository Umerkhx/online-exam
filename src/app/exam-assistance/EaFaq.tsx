import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

function EaFaq() {
    return (
        <div className='mx-auto max-w-screen-xl lg:my-20 my-3'>
            <h2 className='text-center lg:text-5xl text-3xl font-extrabold px-5'>Frequently Asked Questions</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-5 gap-3 mt-5'>
                <div>
                    <Accordion className='space-y-3' type="single" collapsible defaultValue='item-1'>
                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-1">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>How does online exam assistance work?</AccordionTrigger>
                            <AccordionContent>
                            Online exam assistance provides students with expert guidance and support to prepare for and excel in their university exams. It includes resources, tutoring, practice tests, and strategies to help you perform your best.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-2">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>How does online exam assistance work?</AccordionTrigger>
                            <AccordionContent className='text-sm lg:text-base'>
                            Once you sign up, you’ll be matched with a subject expert who will help you understand key concepts, clarify doubts, and guide you through exam preparation via online sessions or materials.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-3">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>Is online exam assistance personalized to my needs?</AccordionTrigger>
                            <AccordionContent>
                            Yes! Services are tailored to your specific subject, course requirements, and areas where you need the most help, ensuring you get personalized support.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-4">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>What subjects are covered in online exam assistance?</AccordionTrigger>
                            <AccordionContent>
                            Most services cover a wide range of subjects, including business, engineering, humanities, sciences, and more. You can inquire about specific courses before enrolling.
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>




                <div>
                    <Accordion className='space-y-3' type="single" collapsible>
                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-5">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>Can online exam assistance guarantee good grades?</AccordionTrigger>
                            <AccordionContent>
                            While no service can guarantee specific grades, they equip you with the knowledge, strategies, and confidence to maximize your performance in exams.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-6">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'> Is online exam assistance ethical to use?</AccordionTrigger>
                            <AccordionContent>
                            Yes! It is designed to complement your studies by enhancing your understanding and preparation. It’s a legitimate tool to help you succeed academically.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-7">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>How much does online exam assistance cost?</AccordionTrigger>
                            <AccordionContent>
                            Pricing varies based on the complexity of your course, the duration of assistance, and the service provider. Many platforms offer flexible plans or custom quotes.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className='dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 p-2 rounded-lg' value="item-8">
                            <AccordionTrigger className='md:text-lg text-base font-semibold'>How can I get started with online exam assistance?</AccordionTrigger>
                            <AccordionContent>
                            Getting started is simple. Choose a trusted platform, sign up, provide details about your course and exam, and schedule your first session with an expert.
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>

            </div>
        </div>
    )
}

export default EaFaq