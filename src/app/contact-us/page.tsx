import React from 'react'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import ContactFAQ from './ContactFaq'

function page() {
  return (
    <div>
        <ContactBanner/>
        <ContactForm/>
        <ContactInfo/>
        <ContactFAQ/>
    </div>
  )
}

export default page