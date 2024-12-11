import { MessageCircleMore, Phone, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Divider() {
    return (
        <div className='lg:mt-60 mt-[550px] '>
            <div className='bg-gradient-to-b from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed] dark:bg-gradient-to-b dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97]'>
                <div className=' max-w-screen-xl mx-auto py-8 px-5 gap-2'>
                    <div>
                        <h2 className='font-extrabold text-4xl text-center text-zinc-100 pt-4'> Let Us Take Care of Your Online Exam <br /> We're Here to Help You</h2>
                        <div className='flex justify-center items-center'>
                            <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 mt-5 px-5 py-3 text-center bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047] text-zinc-200 rounded-lg scale-95 hover:scale-100 transition ease-in duration-200 delay-200'> Chat With Us <MessageCircleMore className='w-5 h-5' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divider