import React from 'react'
import TestBanner from './TestBanner'
import TestServiceCard from './TestServiceCard'
import TestDivider from './TestDivider'
import TestLongContent from './TestLongContent'
import TestFaq from './TestFaq'
import TestServiceTestimonial from './TestServiceTestimonial'

function page() {
  return (
    <div>
    <TestBanner/>
    <TestServiceCard/>
    <TestDivider/>
    <TestLongContent/>
    <TestServiceTestimonial/>
    <TestFaq/>
    </div>
  )
}

export default page