"use client";
import { ArrowLeftCircle, ArrowRight, Calendar, FileText, Hash, Loader2, Loader2Icon, Mail, Minus, Phone, Plus, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { sendEmails } from "../(backend)/action/formAction";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffectSmoothDemo } from "./TypeWriterForm";

function BannerForm() {
  const [date, setDate] = React.useState<Date>();
  const [activeButton, setActiveButton] = useState<string | null>("writing");
  const [wordCount, setWordCount] = useState<number>(250);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedQuestions, setSelectedQuestions] = useState<string>("");
  const [showSubject, setShowSubject] = useState<boolean>(false);
  const [showQuestions, setShowQuestions] = useState<boolean>(false);
  const [pending, setPending] = useState(false);
  const router = useRouter(); // Initialize the router

  // New state for form data
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<any>("");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleIncrement = () => {
    setWordCount((prevCount) => prevCount + 250);
  };

  const handleDecrement = () => {
    setWordCount((prevCount) => (prevCount > 0 ? prevCount - 250 : 0));
  };

  const options: number[] = Array.from({ length: 50 }, (_, i) => i + 1);

  const handleServiceChange = (e: any) => {
    const value = e.target.value;
    setSelectedService(value);

    setShowSubject(
      [
        "Assignment/ Coursework",
        "Essay",
        "Dissertation / Thesis / Proposal",
        "Editing / Proofreading",
        "Resume / CV",
        "Question And Answers",
      ].includes(value)
    );

    setShowQuestions(value === "Question And Answers");
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

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
    };

    function convertToFormData(data: any): FormData {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "string" || value instanceof Blob) {
          formData.append(key, value);
        } else {
          console.warn(`Value for ${key} is not a string or Blob:`, value);
        }
      });

      return formData;
    }

    try {
      const formData = convertToFormData(data);
      const response = await sendEmails(formData); // Assume sendEmails is a server action
      if (response?.success) {
        localStorage.removeItem("discount")
        router.push("/thanks");
      }
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  return (
    <div className="  flex items-center justify-center rounded-lg p-4 scale-95 ">
      <div className="w-full lg:max-w-2xl max-w-3xl ">

        <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden py-5">
          <div className="inline-flex items-center px-4 py-2 dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 bg-gradient-to-r from-sky-100 to-blue-200 rounded-full text-sm font-medium mb-4 shadow-lg">
            <span className="animate-pulse mr-2">✨</span>
            Up to 50% Discount Available
          </div>
          <h1 className="text-2xl font-bold  mb-2">
            Get Your Free Quote
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Professional academic writing services tailored to your needs
          </p>
          {/* Service Type Selector */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Select Service Type</h3>
            <div className="flex rounded-2xl bg-gray-100 dark:bg-gray-700 p-1">
              {["writing", "rewriting", "editing"].map((service) => (
                <button
                  key={service}
                  type="button"
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
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Service Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`space-y-2 ${showSubject ? '' : 'md:col-span-2'}`}>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Service Required
                </label>
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
              </div>

              {showSubject && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject Area
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select subject</option>
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
                </div>
              )}
            </div>

            {/* Questions Selection */}
            {showQuestions && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Hash className="w-4 h-4 mr-2" />
                  Number of Questions
                </label>
                <select
                  value={selectedQuestions}
                  onChange={(e) => setSelectedQuestions(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select number of questions</option>
                  {options.map((number) => (
                    <option key={number} value={`${number} Questions`}>
                      {number} Questions
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Word Count and Date */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Word Count
                </label>
                <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                  <button
                    type="button"
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
                    className="p-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Deadline
                </label>
                <input
                  type="date"
                  value={date?.toISOString().split('T')[0] || ''}
                  onChange={(e) => setDate(new Date(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-8 ">
            <button
              type="submit"
              disabled={pending}
              className="w-full dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 bg-gradient-to-r from-sky-100 to-blue-200 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              {pending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Get Your Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BannerForm;