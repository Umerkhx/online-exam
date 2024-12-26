import React from 'react'
import ExamHelpBanner from './ExamHelpBanner'
import ExamHelpCards from './ExamHelpCards'
import ExamHelpDivider from './ExamHelpDivider'
import ExamHelpLC from './ExamHelpLC'
import ExamHelpTestimonial from './ExamHelpTestimonial'
import ExamHelpFaq from './ExamHelpFaq'

function page() {
  return (
    <div>
    <ExamHelpBanner/>
    <ExamHelpCards/>
    <ExamHelpDivider/>
    <ExamHelpLC/>
    <ExamHelpTestimonial/>
    <ExamHelpFaq/>
    </div>
  )
}

export default page