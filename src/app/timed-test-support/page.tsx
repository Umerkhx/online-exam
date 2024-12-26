import React from 'react'
import TimedTestBanner from './TimedTestBanner'
import TestSupportCard from './TestSupportCard'
import TestDivider from './TestDivider'
import TimedLongContent from './TimedLongContent'
import TimedTestimonials from './TimedTestimonials'
import TimedFaq from './TimedFaq'

function page() {
  return (
    <div>
    <TimedTestBanner/>
    <TestSupportCard/>
    <TestDivider/>
    <TimedLongContent/>
    <TimedTestimonials/>
    <TimedFaq/>
    </div>
  )
}

export default page