import React from 'react'
import EaBanner from './EaBanner'
import OurProcess from './OurProcess'
import EADivider from './EADivider'
import EaNumbers from './EaNumbers'
import EaTestimonials from './EaTestimonials'
import EaFaq from './EaFaq'
import EaUrlPin from './EaUrlPin'
import EaFocusCards from './EaFocusCards'
import EaLongContent from './EaLongContent'

function page() {
  return (
    <div>
        <EaBanner/>
        <EaUrlPin/>
        <OurProcess/>
        <EADivider/>
        <EaFocusCards/>
        <EaLongContent/>
        <EaNumbers/>
        <EaTestimonials/>
        <EaFaq/>
    </div>
  )
}

export default page