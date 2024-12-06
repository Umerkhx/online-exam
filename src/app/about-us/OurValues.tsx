import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

function OurValues() {
  return (
    <section className="py-10 md:py-16 ">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <ShieldCheck className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We believe in doing the right thing, always. Our commitment to ethical practices is unwavering.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Lightbulb className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We're constantly pushing boundaries and thinking outside the box to deliver cutting-edge solutions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We believe in the power of teamwork. Together, we can achieve more than we ever could individually.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default OurValues