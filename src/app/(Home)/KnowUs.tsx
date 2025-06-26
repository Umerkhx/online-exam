"use client"

import Link from "next/link"
import { BookOpen, DollarSign, Users, ArrowRight, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function KnowUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="md:pt-16 pt-10 pb-2 relative overflow-hidden ">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center lg:text-left px-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold mb-6 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 500+ Students
              </div>

              <h2 className="text-2xl sm:text-5xl  font-bold sm:mb-6 mb-2 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Make Wise Decision For
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent animate-gradient-x">
                  Academic Success
                </span>
              </h2>

              <p className="md:text-xl text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Online Exam Relief is the leading platform for providing help in online classes, exams, and assignments.
                We've been transforming academic journeys for years.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 px-6">
              <Card
                className={`group border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: "200ms" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/25">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="md:text-2xl text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        Help For All Subjects
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed md:text-lg">
                        Our expert tutors cover diverse fields with best practices, offering comprehensive online
                        classes, exams, and homework assistance for all students.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`group border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: "400ms" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-emerald-500/25">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="md:text-2xl text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        Affordable Packages
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed md:text-lg">
                        We provide highly-affordable, quality solutions ensuring every student can achieve their
                        academic goals without financial stress.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <div
              className={`flex justify-center lg:justify-start md:pt-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/order-now" className="flex items-center gap-3">
                  Join Us Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - Stats Card */}
          <div
            className={`lg:pl-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-sky-900 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500  scale-90 hover:scale-95">
              <CardContent className="p-10 relative">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5"></div>

                <div className="text-center space-y-8 relative z-10">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-110">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
                      Expert Academic Support
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                      Join thousands of students who have transformed their academic performance with our comprehensive
                      support system.
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-200 to-sky-200 dark:from-slate-800 dark:to-slate-900 transition-all duration-300 hover:scale-105 group">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        500+
                      </div>
                      <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Students Helped</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl  bg-gradient-to-br from-gray-200 to-green-200 dark:from-slate-800 dark:to-slate-900 transition-all duration-300 hover:scale-105 group">
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        95%
                      </div>
                      <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Success Rate</div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      24/7 Support
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      Secure & Private
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

   
    </section>
  )
}
