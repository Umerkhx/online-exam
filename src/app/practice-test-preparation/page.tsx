import React from 'react'
import TestBanner from './TestBanner'
import TestServiceCard from './TestServiceCard'
import TestDivider from './TestDivider'
import TestLongContent from './TestLongContent'
import EaTestimonials from '../exam-assistance/EaTestimonials'
import TestFaq from './TestFaq'

function page() {
  return (
    <div>
    <TestBanner/>
    <TestServiceCard/>
    <TestDivider/>
    <TestLongContent/>
    <EaTestimonials/>
    <TestFaq/>
    </div>
  )
}

export default page