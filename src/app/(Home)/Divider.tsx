import React from 'react'

function Divider() {
    return (
        <div className='lg:mt-60 mt-[550px] '>
            <div className='bg-gradient-to-br from-blue-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900  '>
                <div className=' max-w-screen-xl mx-auto py-8 px-5 gap-2'>
                    <div>
                        <h2 className='font-bold text-4xl text-center text-zinc-100 pt-4'> Let Us Take Care of Your Online Exam <br />
                        We're Here to Help You</h2>

                        <div className='flex justify-center items-center'>
                        <button className='mt-5 px-5 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-zinc-200 rounded-lg scale-95 hover:scale-100 transition ease-in duration-200 delay-200'> Contact Us
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divider