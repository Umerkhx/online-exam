"use client"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How quickly do you respond to contact inquiries?",
    answer: "We typically respond to all inquiries within 24 hours. For urgent matters, our live chat support is available 24/7 for immediate assistance."
  },
  {
    question: "What information should I include when contacting support?",
    answer: "Please include your full name, email address, a clear subject line, and a detailed description of your question or issue. The more specific you are, the better we can assist you."
  },
  {
    question: "Can I schedule a consultation or meeting?",
    answer: "Yes! We offer personalized consultations to discuss your academic needs. You can request a consultation through our contact form or by calling our support team directly."
  },
  {
    question: "Do you provide support for all academic levels?",
    answer: "Absolutely! We provide support for all academic levels, from high school to graduate studies, across various subjects and disciplines."
  },
  {
    question: "Is there a cost for contacting support?",
    answer: "No, contacting our support team is completely free. We're here to help answer your questions and provide guidance without any charge."
  },
  {
    question: "What if I need help outside of business hours?",
    answer: "Our live chat support is available 24/7. For email inquiries sent after hours, we'll respond first thing the next business day."
  },
  {
    question: "Can I provide feedback about your services?",
    answer: "We welcome and encourage feedback! You can share your thoughts through our contact form, email, or phone. Your feedback helps us improve our services."
  },
  {
    question: "How do I report a technical issue with the website?",
    answer: "Please report any technical issues through our contact form or email, including details about the problem, your browser, and device. We'll work quickly to resolve it."
  }
]

function ContactFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="w-full lg:pt-16 lg:pb-36 pt-10 pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-zinc-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-800 dark:text-zinc-200 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Find quick answers to common questions about contacting us and our support services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-left">
                  <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    {item.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0 pb-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

     
      </div>
    </section>
  )
}

export default ContactFAQ