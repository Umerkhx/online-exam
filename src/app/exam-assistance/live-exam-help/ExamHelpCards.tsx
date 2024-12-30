import React from 'react'
import ServiceCard from '../practice-test-preparation/ServiceCard';

function ExamHelpCards() {
    const services = [
        {
          title: "Live Exam Assistance",
          description: "Receive real-time help during your exams from expert tutors, guiding you through tough questions and ensuring you stay on track.",
          buttonText: "Get Help Now",
          meteorCount: 15,
        },
        {
          title: "Subject-Specific Live Support",
          description: "Get focused live assistance for specific subjects, such as Math, Science, or History, to tackle difficult exam questions with expert guidance.",
          buttonText: "Get Help Now",
          meteorCount: 15,
        },
        {
          title: "Instant Exam Question Resolution",
          description: "Get quick answers to any questions during your exam with live chat support, ensuring you never get stuck and stay confident throughout.",
          buttonText: "Get Help Now",
          meteorCount: 15,
        },
        {
          title: "Test-Taking Strategy Coaching",
          description: "Access live coaching sessions where experts provide real-time tips and strategies to improve your performance during timed exams.",
          buttonText: "Get Help Now",
          meteorCount: 15,
        },
        {
          title: "Real-Time Exam Feedback",
          description: "Receive immediate feedback during your exam to understand your mistakes and adjust your approach for better results on the spot.",
          buttonText: "Get Help Now",
          meteorCount: 15,
        },
        {
          title: "Custom Exam Help Sessions",
          description: "Get personalized support based on your needs during live exam sessions, ensuring you have everything you need to succeed under pressure.",
          buttonText: "Get Help Now",
          meteorCount: 15,
        },
      ];
  return (
    <div className="mx-auto max-w-screen-xl mt-12">
    <h2 className="text-center font-extrabold lg:text-4xl text-2xl">Mock Exam & Test Preparation Services</h2>
    <div className="grid lg:grid-cols-3 grid-cols-1 p-4 gap-4 my-5">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
          meteorCount={service.meteorCount}
        />
      ))}
    </div>
  </div>
  )
}

export default ExamHelpCards