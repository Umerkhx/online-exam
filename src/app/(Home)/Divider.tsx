import React from 'react'
import { CtaButtons } from './Banner'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

function Divider() {
    const words = `Stress during online exams and test preparation can feel overwhelming, but with the right support, you can approach them with clarity, confidence, and a sense of calm, ready to handle any challenge. `;

    return (
        <div className='lg:mt-60 mt-[550px] '>
            <div className='my-10 dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-t from-zinc-300 to-[#77BBB8]'>
              <div className='p-5 mx-auto max-w-screen-xl mt-10'>
            <TextGenerateEffect words={words} />
            <div className='flex flex-col lg:flex-row justify-center items-center gap-3 p-3 '>
                <CtaButtons/>
            </div>
        
            </div>
            </div>
        </div>
    )
}

export default Divider


