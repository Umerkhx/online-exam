import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

function OurValues() {
  return (
    <section className="py-5 md:py-16 ">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className='flex flex-col justify-center items-center lg:justify-start'>
          <CardHeader className='flex flex-col justify-center items-center lg:justify-start'>
            <ShieldCheck className="w-12 h-12 text-primary mb-4" />
            <CardTitle className='text-xl '>Upholding Ethical Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center lg:text-left -mt-3 text-sm px-5'>
            We are dedicated to upholding the highest standards of integrity and ethical conduct in all our practices. Our commitment to these principles is steadfast.</p>
          </CardContent>
        </Card>
        <Card className='flex flex-col justify-center items-center lg:justify-start'>
          <CardHeader className='flex flex-col justify-center items-center lg:justify-start'>
            <Lightbulb className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center lg:text-left -mt-3 text-sm px-5'>We are continually expanding horizons and exploring innovative approaches to provide advanced solutions.</p>
          </CardContent>
        </Card>
        <Card className='flex flex-col justify-center items-center lg:justify-start'>
          <CardHeader className='flex flex-col justify-center items-center lg:justify-start'>
            <Users className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Partnerships and Collaborations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-center lg:text-left -mt-3 text-sm px-5'>We value the strength of collaboration, recognizing that together we can accomplish far more than we could alone.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default OurValues