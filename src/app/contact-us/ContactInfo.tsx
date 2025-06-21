"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MessageCircle, Clock, MapPin, Users, BookOpen, Award } from 'lucide-react'

function ContactInfo() {
  return (
    <section className="w-full py-12 md:py-20  dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-800 dark:text-zinc-200 mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Choose the method that works best for you. We're committed to providing exceptional support for your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Support */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">Email Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Get detailed help via email. We respond within 24 hours.
              </p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.location.href = 'mailto:support@onlineexamrelief.com'}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Chat with our support team instantly. Available 24/7.
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {/* Add chat integration */}}
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>

          {/* Phone Support */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl">Phone Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Speak directly with our academic experts for immediate assistance.
              </p>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.location.href = 'tel:3197005034911'}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock assistance for your academic needs</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <Users className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Qualified professionals ready to help you succeed</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">All Subjects</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive support across all academic disciplines</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <Award className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Guaranteed satisfaction with every interaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo