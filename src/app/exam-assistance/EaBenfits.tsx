import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import React from 'react'
import EaFocusCards from './EaFocusCards';

function EaBenfits() {
    const imageUrl = "/exam-card-1.webp";
    const imageUrl2 = "/exam-card-2.webp";
    const imageUrl3 = "/exam-card-3.webp";
    const imageUrl4 = "/exam-card-4.webp";
    const imageUrl5 = "/exam-card-5.webp";
    const imageUrl6 = "/exam-card-6.webp";
 
    return (
        <div className='mt-10 mx-auto max-w-screen-xl'>
            <h1 className='font-bold text-4xl text-center'>Key Advantages of Our Exam Assistance Service</h1>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 p-3 my-5'>
                <div className='flex justify-center items-center '>
                    <DirectionAwareHover imageUrl={imageUrl}>
                        <h2 className="font-bold text-xl">Expert Guidance</h2>
                        <p className="font-normal text-sm">Gain access to a team of highly qualified professionals who specialize in your subject. Their expert insights and tailored strategies will empower you to tackle even the most challenging exam questions with confidence.</p>
                    </DirectionAwareHover>
                </div>
                <div className='flex justify-center items-center'>
                    <DirectionAwareHover imageUrl={imageUrl2}>
                        <p className="font-bold text-xl">Personalized Plans</p>
                        <p className="font-normal text-sm">We understand that every student learns differently. Our service provides personalized study schedules and resources designed to target your specific strengths and weaknesses, ensuring maximum efficiency.</p>
                    </DirectionAwareHover>
                </div>

                <div className='flex justify-center items-center'>
                    <DirectionAwareHover imageUrl={imageUrl3}>
                        <p className="font-bold  text-xl">24/7 Support</p>
                        <p className="font-normal text-sm">Whether it's midnight or early morning, our team is available around the clock to address your questions and concerns. Stay stress-free with reliable assistance whenever you need it.</p>
                    </DirectionAwareHover>
                </div>

                <div className='flex justify-center items-center'>
                    <DirectionAwareHover imageUrl={imageUrl4}>
                        <p className="font-bold  text-xl">All Subjects Covered</p>
                        <p className="font-normal text-sm">From math and science to literature and history, our service covers a wide range of subjects. Whatever your area of study, we have experts ready to guide you to success.</p>
                    </DirectionAwareHover>
                </div>

                <div className='flex justify-center items-center'>
                    <DirectionAwareHover imageUrl={imageUrl5}>
                        <p className="font-bold  text-xl">Stress-Free Prep</p>
                        <p className="font-normal text-sm">Eliminate the anxiety that comes with last-minute cramming. Our structured approach and timely assistance help you stay organized and focused, making your exam preparation smooth and stress-free.</p>
                    </DirectionAwareHover>
                </div>

                <div className='flex justify-center items-center'>
                    <DirectionAwareHover imageUrl={imageUrl6}>
                        <p className="font-bold  text-xl">Proven Results</p>
                        <p className="font-normal text-sm">Our students consistently achieve better grades and improved performance. With our service, you'll not only be well-prepared but also more confident to excel in your exams.</p>
                    </DirectionAwareHover>
                </div>

            </div>

            <EaFocusCards/>

        </div>
    )
}

export default EaBenfits