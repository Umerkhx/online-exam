import Image from 'next/image'
import React from 'react'

function ContactBanner() {
  return (
    <div className='py-10 bg-gradient-to-br from-blue-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900 '>
    <div className='mx-auto max-w-screen-xl'>
        <div className=''>
            <h1 className='lg:text-5xl text-4xl font-bold pt-5 text-center text-zinc-100 '>
                Contact Us
            </h1>
            <p className='text-center font-medium text-gray-100 lg:px-64 px-10 pt-4'>We're here to help! Whether you have questions, need assistance, or just want to share your thoughts, feel free to reach out to us. Our dedicated team is ready to assist you and ensure you have the best experience possible. Use the contact form below, drop us an email, or connect with us on social media—we’d love to hear from you! Let’s make things simple and straightforward, together.</p>
         
        </div>

    </div>
</div>
  )
}

export default ContactBanner