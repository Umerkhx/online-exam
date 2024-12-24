import React from 'react'
import EaBanner from './EaBanner'
import OurProcess from './OurProcess'
import EADivider from './EADivider'
import EaBenfits from './EaBenfits'
import EaNumbers from './EaNumbers'
import EaTestimonials from './EaTestimonials'
import EaFaq from './EaFaq'
import EaUrlPin from './EaUrlPin'

function page() {
  return (
    <div>
        <EaBanner/>
        <EaUrlPin/>
        <OurProcess/>
        <EADivider/>
        <EaBenfits/>
        <EaNumbers/>
        <EaTestimonials/>
        <EaFaq/>
    </div>
  )
}

export default page