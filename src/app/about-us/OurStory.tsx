import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function OurStory() {
  return (
    <section id="our-story" className="py-10 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="lg:text-4xl text-2xl font-bold text-center lg:mb-12 mb-5">Our Story</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className='text-center lg:text-left text-xl'>Our Origins</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center lg:text-left -mt-3 text-sm px-5'>Established in 2010, our institution was founded with the core mission of making technology accessible to all. Beginning in a small garage with a team of just three committed individuals, we have since grown into a prominent entity in the field, advancing the reach and impact of technology in education and beyond.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-center lg:text-left text-xl'>Advancement and Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center lg:text-left -mt-3 text-sm px-5'>Over the years, we have expanded into a global team of over 500 professionals. Our innovative products have set new benchmarks in the industry, earning us recognition as leaders in advancement and research.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default OurStory