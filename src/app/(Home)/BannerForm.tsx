"use client";
import { ArrowLeftCircle, Loader2, Loader2Icon } from "lucide-react";
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
    <form onSubmit={handleSubmit}>
      <div className="xl:ml-28 pb-16 bg-muted shadow-md rounded-xl lg:w-[480px] dark:bg-zinc-900 transition-all duration-300 hover:shadow-2xl hover:border-green-500 hover:scale-[1.02] border-2 border-transparent">
       

        <div className="flex justify-center items-center lg:-translate-y-4 -translate-y-4">
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Upto 50% Discount </span>
      </HoverBorderGradient>
        </div>
        <div className="flex justify-center  ">
          <TypewriterEffectSmoothDemo/>
          
        </div>
        <div className="flex justify-center items-center ">
          <button
            type="button"
            className={`px-5 py-3 md:text-base text-sm transition ease-in duration-200 delay-200 border-[2px] rounded rounded-tl-lg rounded-bl-lg ${activeButton === "writing"
                ? "bg-blue-600 text-white"
                : " bg-zinc-200 text-zinc-800"
              }`}
            onClick={() => handleClick("writing")}
          >
            Writing
          </button>
          <button
            type="button"
            className={`px-5 py-3 md:text-base text-sm transition ease-in duration-200 delay-200 border-[2px] ${activeButton === "rewriting"
                ? "bg-blue-600 text-white"
                : "bg-zinc-200 text-zinc-800"
              }`}
            onClick={() => handleClick("rewriting")}
          >
            Rewriting
          </button>
          <button
            type="button"
            className={`px-5 py-3 md:text-base text-sm transition ease-in duration-200 delay-200 border-[2px]  rounded rounded-tr-lg rounded-br-lg  ${activeButton === "editing"
                ? "bg-blue-600 text-white"
                : "bg-zinc-200 text-zinc-800"
              }`}
            onClick={() => handleClick("editing")}
          >
            Editing
          </button>
        </div>

        <div className="pt-4 w-full px-3">
          <input
            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="pt-2 w-full px-3">
          <input
            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="pt-2 w-full px-3">
          <PhoneInput
            placeholder="Enter Your Phone Number"
            defaultCountry="US"
            value={phone}
            onChange={setPhone}
            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base bg-white text-black dark:!bg-[#121212] dark:!text-white dark:page-specific"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 px-3">
          <div className={`col-span-${showSubject ? "1" : "2"}`}>
            <select
              className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
              name="service"
              required
              onChange={handleServiceChange}
              aria-label="service"
            >
              <option value="option">Services</option>
              <option value="Assignment/ Coursework">
                Assignment/ Coursework
              </option>
              <option value="Essay">Essay</option>
              <option value="Dissertation / Thesis / Proposal">
                Dissertation / Thesis / Proposal
              </option>
              <option value="Question And Answers">Question And Answers</option>
              <option value="SOP">SOP</option>
              <option value="Editing / Proofreading">
                Editing / Proofreading
              </option>
              <option value="PPT">PPT</option>
              <option value="Resume / CV">Resume / CV</option>
              <option value="Others / Custom Orders">
                Others / Custom Orders
              </option>
              <option value="Class">Class</option>
              <option value="Exam">Exam</option>
              <option value="Test">Test</option>
              <option value="Quiz">Quiz</option>
              <option value="Course">Course</option>
              <option value="Homework">Homework</option>
            </select>
          </div>

          {showSubject && (
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                name="subject"
                required
                aria-label="subject"
              >
                <option disabled value="option">
                  Subject
                </option>
                <option value="Hospitality">Hospitality</option>
                <option value="Management">Management</option>
                <option value="Project Cost Management">
                  Project Cost Management
                </option>
                <option value="Law">Law</option>
                <option value="Finance">Finance</option>
                <option value="Auditing">Auditing</option>
                <option value="Research Methodology">
                  Research Methodology
                </option>
                <option value="Economics - Theory">Economics - Theory</option>
                <option value="Economics - Calculation">
                  Economics - Calculation
                </option>
                <option value="Arts and Humanities">Arts and Humanities</option>
                <option value="Psychology">Psychology</option>
                <option value="Health & Social Care">
                  Health & Social Care
                </option>
                <option value="Nursing">Nursing</option>
                <option value="Medical">Medical</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Physiology">Physiology</option>
                <option value="Travel & Tourism">Travel & Tourism</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Biology">Biology</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Programming / Coding">
                  Programming / Coding
                </option>
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

        {showQuestions && (
          <div className=" w-full pt-2 px-3 ">
            <select
              className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
              name="question"
              required
              aria-label="question"
              value={selectedQuestions}
              onChange={(e) => setSelectedQuestions(e.target.value)}
            >
              <option value="">Select Questions</option>
              {options.map((number) => (
                <option key={number} value={`${number} Questions`}>
                  {number} Questions
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 pt-2 px-3">
          <div className="">
            <div className="flex justify-center items-center gap-2 bg-muted dark:bg-zinc-900 rounded-lg border-[2px] w-full py-[6px] px-3 outline-none">
              <button
                type="button"
                onClick={handleDecrement}
                style={{ padding: "5px 10px" }}
              >
                -
              </button>
              <span className="text-sm lg:text-base">{wordCount} Words</span>
              <button
                type="button"
                onClick={handleIncrement}
                style={{ padding: "5px 10px" }}
              >
                +
              </button>
            </div>
          </div>

          <div className="">
            <DatePickerDemo date={date} setDate={setDate} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
          type="submit"
            disabled={pending}
            className={`relative w-2/4 bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047] transition ease-in duration-200 delay-200 text-white text-base rounded-full py-3 overflow-hidden group 
      ${pending ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            <span className="relative flex items-center justify-center">
              {pending ? (
                <>
                  <Loader2Icon className="animate-spin mr-2" />
                  Submitting
                </>
              ) : (
                <>
                  <span className='relative flex items-center justify-center'>
                    Get Free Quote
                    <span className="absolute left-full  transition-transform duration-500 ease-in-out transform group-hover:rotate-180 text-base ml-1">
                      <ArrowLeftCircle />
                    </span>
                  </span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default BannerForm;


