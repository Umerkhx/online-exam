import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function OurStory() {
  return (
    <section id="our-story" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Beginnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Founded in 2010, our company started with a simple idea: to make technology accessible to everyone. We began in a small garage with just three passionate individuals.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Growth and Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Over the years, we've grown into a global team of over 500 employees. We've launched groundbreaking products and have been recognized as industry leaders in innovation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default OurStory