import Image from 'next/image'
import React from 'react'

function Solutions() {
  return (
    <div className='mt-16 max-w-screen-xl mx-auto'>
        <h2 className='text-center font-extrabold text-5xl '>Why Choose <br />Online Exam Relief</h2>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 p-3 mt-5'>
            <div className='group'>
                <div className='p-4 scale-95 bg-gradient-to-tl from-blue-400 to-zinc-200 dark:bg-gradient-to-tl dark:from-blue-900 dark:to-zinc-900 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px]'>
                  <div className='flex justify-center items-center pt-4'><Image src={'/task-list.png'} width={80} height={80} alt='tasklist'></Image></div>
                  <h2 className='text-center pt-2 font-bold text-xl'>On-Time Delivery</h2>
                  <p className='text-center font-medium px-5 pt-3'>We always meet deadlines, whether it's for attending an online class, taking an exam, or assisting with homework.</p>
                </div>
            </div>

            <div className='group'>
                <div className='p-4 scale-95 bg-gradient-to-tl from-blue-400 to-zinc-200 dark:bg-gradient-to-tl dark:from-blue-900 dark:to-zinc-900 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px]'>
                  <div className='flex justify-center items-center pt-4'><Image src={'/server.png'} width={80} height={80} alt='tasklist'></Image></div>
                  <h2 className='text-center pt-2 font-bold text-xl'>Advanced Security</h2>
                  <p className='text-center font-medium px-5 pt-3'>We prioritize cutting-edge data security measures to safeguard every student's information and ensure it is never shared.</p>
                </div>
            </div>

            <div className='group'>
                <div className='p-4 scale-95 bg-gradient-to-tl from-blue-400 to-zinc-200 dark:bg-gradient-to-tl dark:from-blue-900 dark:to-zinc-900 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px]'>
                  <div className='flex justify-center items-center pt-4'><Image src={'/team.png'} width={80} height={80} alt='tasklist'></Image></div>
                  <h2 className='text-center pt-2 font-bold text-xl'>Expert Team</h2>
                  <p className='text-center font-medium px-5 pt-3'>Our team of PhD-qualified tutors is here to help students achieve top grades.</p>
                </div>
            </div>

            <div className='group'>
                <div className='p-4 scale-95 bg-gradient-to-tl from-blue-400 to-zinc-200 dark:bg-gradient-to-tl dark:from-blue-900 dark:to-zinc-900 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px]'>
                  <div className='flex justify-center items-center pt-4'><Image src={'/budget.png'} width={80} height={80} alt='tasklist'></Image></div>
                  <h2 className='text-center pt-2 font-bold text-xl'>Budget-Friendly Packages</h2>
                  <p className='text-center font-medium px-5 pt-3'>We provide affordable solutions to help students ease their educational stress.</p>
                </div>
            </div>

            <div className='group'>
                <div className='p-4 scale-95 bg-gradient-to-tl from-blue-400 to-zinc-200 dark:bg-gradient-to-tl dark:from-blue-900 dark:to-zinc-900 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px]'>
                  <div className='flex justify-center items-center pt-4'><Image src={'/money-back-guarantee.png'} width={80} height={80} alt='tasklist'></Image></div>
                  <h2 className='text-center pt-2 font-bold text-xl'>Refund Assurance</h2>
                  <p className='text-center font-medium px-5 pt-3'>If you're not satisfied with your online assignment, you can request a refund. Your satisfaction is our top priority.</p>
                </div>
            </div>

            <div className='group'>
                <div className='p-4 scale-95 bg-gradient-to-tl from-blue-400 to-zinc-200 dark:bg-gradient-to-tl dark:from-blue-900 dark:to-zinc-900 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px]'>
                  <div className='flex justify-center items-center pt-4'><Image src={'/telephone.png'} width={80} height={80} alt='tasklist'></Image></div>
                  <h2 className='text-center pt-2 font-bold text-xl'>Round-the-Clock Support</h2>
                  <p className='text-center font-medium px-5 pt-3'>Our team is here 24/7 to assist with any issues you may have. Reach out to us through chat, email, or phone.</p>
                </div>
            </div>

         </div>
    </div>

  )
}

export default Solutions