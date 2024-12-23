import React from 'react'

function OurProcess() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
        <h2 className='text-center py-2 text-4xl font-bold'>Our Work Process</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      <div
        className="relative group p-6 rounded-lg shadow-lg dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8] hover:scale-105 transition-all duration-300"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center  font-bold text-lg group-hover:bg-sky-400 transition-all duration-500"
        >
          01
        </div>
        <h3 className="text-xl  font-bold  mb-2 text-center ">
        Preparation
        </h3>
        <p className=" text-sm text-center  group-hover:font-semibold ">
        We analyze your syllabus, understand key topics, and create a custom study plan to ensure you are well-prepared for the exam.
        </p>
      </div>

      <div
        className="relative group p-6 rounded-lg shadow-lg dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8] hover:scale-105 transition-all duration-500"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center  font-bold text-lg group-hover:bg-sky-400 transition-all duration-500"
        >
          02
        </div>
        <h3 className="text-xl  font-bold  mb-2 text-center ">
        Resource Creation
        </h3>
        <p className=" text-sm text-center  group-hover:font-semibold ">
        Develop study materials, including notes, practice tests, and question banks, tailored to your subject requirements.
        </p>
      </div>

    
      <div
        className="relative group p-6 rounded-lg shadow-lg dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8] hover:scale-105 transition-all duration-500"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center  font-bold text-lg group-hover:bg-sky-400 transition-all duration-500"
        >
          03
        </div>
        <h3 className="text-xl  font-bold  mb-2 text-center ">
        Practice & Review
        </h3>
        <p className=" text-sm text-center  group-hover:font-semibold ">
        Simulate real exam conditions with timed tests and provide detailed feedback to improve your performance.
        </p>
      </div>


      <div
        className="relative group p-6 rounded-lg shadow-lg dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-b from-zinc-200 to-[#77BBB8] hover:scale-105 transition-all duration-500"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center  font-bold text-lg group-hover:bg-sky-400 transition-all duration-500"
        >
          04
        </div>
        <h3 className="text-xl  font-bold  mb-2 text-center ">
        Final Assistance
        </h3>
        <p className=" text-sm text-center  group-hover:font-semibold ">
        Support you on exam day with last-minute tips, clarification of doubts, and confidence-building strategies to help you succeed.
        </p>
      </div>
    </div>
    </div>
  )
}

export default OurProcess