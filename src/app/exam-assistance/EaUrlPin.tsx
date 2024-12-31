import { PinContainer } from '@/components/ui/3d-pin'
import React from 'react'

function EaUrlPin() {
  return (
    <div className='mt-10 mx-auto max-w-screen-xl'>
        <h2 className='text-center font-bold md:text-4xl text-2xl px-2'>Sub-Categories Of Exam Assistance</h2>
        <div className='grid lg:grid-cols-3 grid-cols-1 p-4 sm:gap-3 gap-6'>
            <div>
            <PinContainer
        title="/practice-test-preparation"
        href="/exam-assistance/practice-test-preparation"
      >
        <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900 dark:text-zinc-200">
          Mock Exam & Test Preparation 
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-zinc-700 dark:text-zinc-200 ">
            Get ready for your mock exams and test preparation with our assistance and support services.
            </span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4  bg-gradient-to-br from-[#000000] to-[#52A39F]" /> */}
        </div>
      </PinContainer>
            </div>

            <div>
            <PinContainer
        title="/timed-test-support"
        href="/exam-assistance/timed-test-support"
      >
        <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900 dark:text-zinc-200">
          Timed Test Support
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-zinc-700 dark:text-zinc-200 ">
            Receive support and strategies to effectively manage and excel in your timed tests.
            </span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4  bg-gradient-to-br from-[#000000] to-[#52A39F]" /> */}
        </div>
      </PinContainer>
            </div>

            <div>
            <PinContainer
        title="/live-exam-help"
        href="/exam-assistance/live-exam-help"
      >
        <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900 dark:text-zinc-200">
          Live Exam Support 
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-zinc-700 dark:text-zinc-200 ">
            Real-Time Exam Assistance to help you navigate through your exams with expert guidance and support.
            </span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4  bg-gradient-to-br from-[#000000] to-[#52A39F]" /> */}
        </div>
      </PinContainer>
            </div>

        </div>
    </div>
  )
}

export default EaUrlPin