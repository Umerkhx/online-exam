import React from 'react'
import ServiceCard from './ServiceCard';

function TestServiceCard() {
    const services = [
        {
          title: "Mock Exam Practice",
          description: "Take realistic mock exams designed to mirror your actual university tests. Perfect for practicing time management and familiarizing yourself with exam formats.",
          buttonText: "Order Now",
          meteorCount: 15,
        },
        {
          title: "Subject-Specific Test Prep",
          description: "Tailored test preparation sessions focusing on individual subjects like Maths, Science, or History, helping you sharpen your understanding and exam techniques.",
          buttonText: "Order Now",
          meteorCount: 15,
        },
        {
          title: "Practice Quizzes",
          description: "Access a wide range of practice quizzes covering various topics and difficulty levels to assess your knowledge and identify areas that need improvement.",
          buttonText: "Order Now",
          meteorCount: 15,
        },
        {
          title: "Exam Strategy Workshops",
          description: "Workshops that teach effective strategies for tackling exams, including time management, reading comprehension, and stress management techniques.",
          buttonText: "Order Now",
          meteorCount: 15,
        },
        {
          title: "One-on-One Test Coaching",
          description: "Personalized coaching sessions where experts guide you through mock exams and focus on improving your weak points.",
          buttonText: "Order Now",
          meteorCount: 15,
        },
        {
          title: "Customizable Study Plans",
          description: "Receive personalized study schedules based on your unique learning style and exam dates, optimizing your preparation for peak performance.",
          buttonText: "Order Now",
          meteorCount: 15,
        },
      ];
  return (
    <div className="mx-auto max-w-screen-xl mt-12">
      <h2 className="text-center font-extrabold text-4xl">Mock Exam & Test Preparation Services</h2>
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

export default TestServiceCard