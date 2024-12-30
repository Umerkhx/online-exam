import React from 'react'
import ServiceCard from '../practice-test-preparation/ServiceCard'

function TestSupportCard() {
    const services = [
        {
          title: "Timed Mock Exams",
          description: "Simulate real university exams with timed mock tests to practice managing time effectively and familiarize yourself with exam structures.",
          buttonText: "Start Now",
          meteorCount: 15,
        },
        {
          title: "Focused Subject Test Prep",
          description: "Prepare for timed tests in specific subjects like Math, Science, or History with targeted sessions designed to improve your performance under pressure.",
          buttonText: "Start Now",
          meteorCount: 15,
        },
        {
          title: "Timed Practice Quizzes",
          description: "Challenge yourself with a variety of timed quizzes across different topics and difficulty levels to gauge your readiness and refine your speed.",
          buttonText: "Start Now",
          meteorCount: 15,
        },
        {
          title: "Test-Taking Strategy Sessions",
          description: "Learn proven techniques for acing timed tests, including pacing, question prioritization, and stress management strategies.",
          buttonText: "Start Now",
          meteorCount: 15,
        },
        {
          title: "Personalized Test Coaching",
          description: "Work one-on-one with expert coaches to enhance your performance in timed tests by addressing your weaknesses and boosting your confidence.",
          buttonText: "Start Now",
          meteorCount: 15,
        },
        {
          title: "Custom Study Plans for Timed Tests",
          description: "Get tailored study schedules crafted to align with your test dates and learning style, ensuring you're fully prepared to excel within time constraints.",
          buttonText: "Start Now",
          meteorCount: 15,
        },
      ];
  return (
    <div className="mx-auto max-w-screen-xl mt-12">
    <h2 className="text-center font-extrabold lg:text-4xl text-2xl ">Mock Exam & Test Preparation Services</h2>
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

export default TestSupportCard