"use client"
import {ArrowLeftCircle,ArrowRight,Calendar,FileText,Hash,Loader2,Mail,Minus,Phone,Plus,User,AlertCircle,} from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import "react-phone-number-input/style.css"
import { sendEmails } from "../(backend)/action/formAction"
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "sonner"
import CustomCaptcha from "@/components/common/CustomCaptcha"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import gsap from "gsap"

function BannerForm({ locationDetails }: any) {
  const [date, setDate] = React.useState<Date>(new Date())
  const [activeButton, setActiveButton] = useState<string | null>("writing")
  const [wordCount, setWordCount] = useState<number>(250)
  const [selectedService, setSelectedService] = useState<string>("Essay")
  const [selectedSubject, setSelectedSubject] = useState<string>("")
  const [selectedQuestions, setSelectedQuestions] = useState<string>("")
  const [showSubject, setShowSubject] = useState<boolean>(false)
  const [showQuestions, setShowQuestions] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState(false);
  const [pending, setPending] = useState(false)
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<any>("")
  const [currentStep, setCurrentStep] = useState<number>(1)

  
  const formattedDate = date ? date.toISOString().split('T')[0] : '';

  // Validation errors state
  const [errors, setErrors] = useState<{
    selectedService?: string
    selectedSubject?: string
    selectedQuestions?: string
    date?: string
  }>({})

  const [isMobile, setIsMobile] = useState(false)
  const formRef = useRef<any>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only animate on desktop
    if (!isMobile && formRef.current) {
      gsap.fromTo(formRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, delay: 0.2, ease: "power2.out" }
      )
    }
  }, [isMobile])

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const handleIncrement = () => {
    setWordCount((prevCount) => prevCount + 250)
  }

  const handleDecrement = () => {
    setWordCount((prevCount) => (prevCount > 0 ? prevCount - 250 : 0))
  }

  const options: number[] = Array.from({ length: 50 }, (_, i) => i + 1)

  const handleServiceChange = (e: any) => {
    const value = e.target.value
    setSelectedService(value)

    if (errors.selectedService) {
      setErrors(prev => ({ ...prev, selectedService: undefined }))
    }

    setShowSubject(
      [
        "Assignment/ Coursework",
        "Essay",
        "Dissertation / Thesis / Proposal",
        "Editing / Proofreading",
        "Resume / CV",
        "Question And Answers",
      ].includes(selectedService),
    )

    setShowQuestions(value === "Question And Answers")
  }

  const handleSubjectChange = (e: any) => {
    setSelectedSubject(e.target.value)
    // Clear subject error when user selects a subject
    if (errors.selectedSubject) {
      setErrors(prev => ({ ...prev, selectedSubject: undefined }))
    }
  }

  const handleQuestionsChange = (e: any) => {
    setSelectedQuestions(e.target.value)
    // Clear questions error when user selects questions
    if (errors.selectedQuestions) {
      setErrors(prev => ({ ...prev, selectedQuestions: undefined }))
    }
  }

  const handleDateChange = (e: any) => {
    setDate(new Date(e.target.value))
    // Clear date error when user selects a date
    if (errors.date) {
      setErrors(prev => ({ ...prev, date: undefined }))
    }
  }

  // Validation function for step 1
  const validateStep1 = () => {
    const newErrors: {
      selectedService?: string
      selectedSubject?: string
      selectedQuestions?: string
      date?: string
    } = {}

    if (!selectedService) {
      newErrors.selectedService = "Please select a service"
    }

    if (showSubject && !selectedSubject) {
      newErrors.selectedSubject = "Please select a subject"
    }

    if (showQuestions && !selectedQuestions) {
      newErrors.selectedQuestions = "Please select number of questions"
    }

    if (!date) {
      newErrors.date = "Please select a deadline"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Function to proceed to next step
  const nextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2)
    }
  }

  // Function to go back to previous step
  const prevStep = () => {
    setCurrentStep(1)
  }

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return;
    }
    setPending(true)

    const data = {
      date: date?.toDateString(),
      name,
      email,
      phone,
      activeButton,
      wordCount: wordCount.toString(),
      selectedService,
      selectedSubject,
      selectedQuestions,
    }

    function convertToFormData(data: any): FormData {
      const formData = new FormData()

      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "string" || value instanceof Blob) {
          formData.append(key, value)
        } else {
          console.warn(`Value for ${key} is not a string or Blob:`, value)
        }
      })

      return formData
    }

    try {
      const formData = convertToFormData(data)
      const response = await sendEmails(formData) // Assume sendEmails is a server action
      if (response?.success) {
        localStorage.removeItem("discount")
        router.push("/thanks")
      }
    } catch (error) {
      console.error("Form submission failed", error)
    }
  }

  return (
    <div className="flex items-center justify-center rounded-lg lg:p-4 p-1 md:mb-0 -mb-6 scale-95">
      <div className="w-full lg:max-w-2xl max-w-3xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden py-3 px-1.5"
        >
          <div className="inline-flex items-center px-4 py-2 dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 bg-gradient-to-r from-sky-100 to-blue-200 rounded-full text-sm font-medium mb-4 shadow-lg">
            <span className="animate-pulse mr-2">✨</span>
            Up to 50% Discount Available
          </div>
          <h1 className="text-2xl font-bold mb-2">Get A Free Quote</h1>
          <p className="text-gray-600 dark:text-gray-300 md:block hidden">
            Professional academic writing services tailored to your needs
          </p>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <>
              {/* Service Type Selector */}
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Select Service Type</h3>
                <div className="flex rounded-2xl bg-gray-100 dark:bg-gray-700 p-1">
                  {["writing", "rewriting", "editing"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      aria-label="select-writing-service"
                      className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${activeButton === service
                        ? "dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 bg-gradient-to-r from-sky-100 to-blue-200 shadow-lg transform scale-105"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                        }`}
                      onClick={() => handleClick(service)}
                    >
                      {service.charAt(0).toUpperCase() + service.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="p-8 space-y-6">
                {/* Service Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`space-y-2 ${showSubject ? "" : "md:col-span-2"}`}>
                    <label htmlFor="service-select" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Service Required *
                    </label>
                    <select
                      id="service-select"
                      value={selectedService}
                      onChange={handleServiceChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.selectedService
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-200 dark:border-gray-600'
                        }`}
                    >
                      <option value="">Select a service</option>
                      <option value="Assignment/ Coursework">Assignment/ Coursework</option>
                      <option value="Essay">Essay</option>
                      <option value="Dissertation / Thesis / Proposal">Dissertation / Thesis / Proposal</option>
                      <option value="Question And Answers">Question And Answers</option>
                      <option value="SOP">SOP</option>
                      <option value="Editing / Proofreading">Editing / Proofreading</option>
                      <option value="PPT">PPT</option>
                      <option value="Resume / CV">Resume / CV</option>
                      <option value="Others / Custom Orders">Others / Custom Orders</option>
                      <option value="Class">Class</option>
                      <option value="Exam">Exam</option>
                      <option value="Test">Test</option>
                      <option value="Quiz">Quiz</option>
                      <option value="Course">Course</option>
                      <option value="Homework">Homework</option>
                    </select>
                    {errors.selectedService && (
                      <div className="flex items-center text-red-500 text-sm mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.selectedService}
                      </div>
                    )}
                  </div>

                  {showSubject && (
                    <div className="space-y-2 -mt-1">
                      <label htmlFor="subject-select" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">Subject Area *</label>
                      <select
                        id="subject-select"
                        value={selectedSubject}
                        onChange={handleSubjectChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.selectedSubject
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-200 dark:border-gray-600'
                          }`}
                      >
                        <option value="">Select subject</option>
                        <option value="Business">Business</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Management">Management</option>
                        <option value="Project Cost Management">Project Cost Management</option>
                        <option value="Law">Law</option>
                        <option value="Finance">Finance</option>
                        <option value="Auditing">Auditing</option>
                        <option value="Research Methodology">Research Methodology</option>
                        <option value="Economics - Theory">Economics - Theory</option>
                        <option value="Economics - Calculation">Economics - Calculation</option>
                        <option value="Arts and Humanities">Arts and Humanities</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Health & Social Care">Health & Social Care</option>
                        <option value="Nursing">Nursing</option>
                        <option value="Medical">Medical</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Physiology">Physiology</option>
                        <option value="Travel & Tourism">Travel & Tourism</option>
                        <option value="Biotechnology">Biotechnology</option>
                        <option value="Biology">Biology</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Programming / Coding">Programming / Coding</option>
                        <option value="Statistics">Statistics</option>
                        <option value="ANOVA">ANOVA</option>
                        <option value="SPSS">SPSS</option>
                        <option value="NVIVO">NVIVO</option>
                        <option value="SAS">SAS</option>
                        <option value="Eviews">Eviews</option>
                        <option value="Accounts">Accounts</option>
                        <option value="Education">Education</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Geology">Geology</option>
                        <option value="English Literature">English Literature</option>
                        <option value="Mechanics">Mechanics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Physics">Physics</option>
                        <option value="Science">Science</option>
                        <option value="Engineering">Engineering</option>
                      </select>
                      {errors.selectedSubject && (
                        <div className="flex items-center text-red-500 text-sm mt-1">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.selectedSubject}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Questions Selection */}
                {showQuestions && (
                  <div className="space-y-2">
                    <label htmlFor="questions-select" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      <Hash className="w-4 h-4 mr-2" />
                      Number of Questions *
                    </label>
                    <select
                      id="questions-select"
                      value={selectedQuestions}
                      onChange={handleQuestionsChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.selectedQuestions
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-200 dark:border-gray-600'
                        }`}
                    >
                      <option value="">Select number of questions</option>
                      {options.map((number) => (
                        <option key={number} value={`${number} Questions`}>
                          {number} Questions
                        </option>
                      ))}
                    </select>
                    {errors.selectedQuestions && (
                      <div className="flex items-center text-red-500 text-sm mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.selectedQuestions}
                      </div>
                    )}
                  </div>
                )}

                {/* Word Count and Date */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex justify-start text-sm font-medium text-gray-700 dark:text-gray-300">Word Count</label>
                    <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                      <button
                        type="button"
                        aria-label="minus-word-count"
                        onClick={handleDecrement}
                        className="p-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <div className="flex-1 text-center py-3 font-medium text-gray-800 dark:text-white">
                        {wordCount} Words
                      </div>
                      <button
                        type="button"
                        onClick={handleIncrement}
                        aria-label="plus-word-count"
                        className="p-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="deadline-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Deadline *
                    </label>
                    <input
                      id="deadline-input"
                      type="date"
                      value={formattedDate}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.date
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-200 dark:border-gray-600'
                        }`}
                    />
                    {errors.date && (
                      <div className="flex items-center text-red-500 text-sm mt-1">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.date}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Next Step Button */}
              <div className="lg:px-8 lg:py-6 py-2 px-6">
                <button
                  aria-label="next-step"
                  type="button"
                  onClick={nextStep}
                  className="w-full dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 bg-gradient-to-r from-sky-100 to-blue-200 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <>
              <div className="p-8 space-y-5">
                {/* Personal Information */}
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </label>

                  <PhoneInput
                    id="phone-input"
                    placeholder="Enter Your Phone Number"
                    defaultCountry={locationDetails.countryCode}
                    value={phone}
                    required
                    international
                    withCountryCallingCode
                    onChange={setPhone}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />


                </div>
                <div className="w-full mx-auto flex items-center justify-start">
                  <CustomCaptcha setIsVerified={setIsVerified} />
                </div>
              </div>



              {/* Back and Submit Buttons */}
              <div className="p-8 flex flex-col space-y-4">
                <button
                  aria-label="back-to-first-step"
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  <ArrowLeftCircle className="w-5 h-5" />
                  <span>Back to service selection</span>
                </button>



                <button
                  type="submit"
                  disabled={pending}
                  aria-label="order-submitted"
                  className="w-full dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 bg-gradient-to-r from-sky-100 to-blue-200 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {pending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Request a Free Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex justify-center items-center ">
                  <TextGenerateEffect words={"Get reply in minutes"} />
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default BannerForm