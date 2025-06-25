'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function AnimatedLongContent() {
const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current


    // Set initial states with reduced offsets for smoother appearance
    gsap.set('.animate-section', {
      opacity: 0,
      y: 10
    })

    gsap.set('.animate-title', {
      opacity: 0,
      y: 5
    })

    gsap.set('.animate-list li', {
      opacity: 0,
      x: -5
    })

    gsap.set('.animate-paragraph', {
      opacity: 0,
      y: 5
    })

    // Configure ScrollTrigger defaults for smoother performance
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
      ignoreMobileResize: true
    })

    // Create ScrollTrigger for the main title
    ScrollTrigger.create({
      trigger: '.main-title',
      scroller: container,
      start: 'top 85%',
      onEnter: () => {
        gsap.to('.main-title', {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power1.out'
        })
      },
      markers: false // Set to true for debugging if needed
    })

    // Animate sections with optimized settings
    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        scroller: container,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power1.out'
          })
        }
      })
    })

    // Animate titles with quick response
    gsap.utils.toArray('.animate-title').forEach((title: any) => {
      ScrollTrigger.create({
        trigger: title,
        scroller: container,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power1.out'
          })
        }
      })
    })

    // Animate paragraphs with quick fade-in
    gsap.utils.toArray('.animate-paragraph').forEach((paragraph: any) => {
      ScrollTrigger.create({
        trigger: paragraph,
        scroller: container,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(paragraph, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: 'power1.out'
          })
        }
      })
    })

    // Animate list items with minimal stagger
    gsap.utils.toArray('.animate-list').forEach((list: any) => {
      const listItems = list.querySelectorAll('li')
      
      ScrollTrigger.create({
        trigger: list,
        scroller: container,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(listItems, {
            opacity: 1,
            x: 0,
            duration: 0.2,
            stagger: 0.03,
            ease: 'power1.out'
          })
        }
      })
    })

    // Add momentum to scrolling
    if ('ontouchstart' in window) {
      container.addEventListener('touchmove', (e) => {
        e.preventDefault()
      }, { passive: false })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      if (containerRef.current) {
        containerRef.current.style.scrollBehavior = 'auto'
      }
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 my-10">
      <div 
        ref={containerRef}
        className="max-h-[600px] overflow-y-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 space-y-5 relative">
        <div ref={contentRef} className="space-y-5">
          <div className="animate-section">
            <h2 className="main-title text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              About Our Online Class Services
            </h2>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We provide comprehensive support for students enrolled in online classes. Whether you're short on time, overwhelmed by deadlines, or simply need expert guidance, our team is here to help you succeed—discreetly and professionally.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Our Services Include</h3>
            <ul className="animate-list list-disc list-inside text-zinc-600 dark:text-zinc-300">
              <li>Full online class management (assignments, quizzes, tests, discussions)</li>
              <li>Help with individual tasks or specific modules</li>
              <li>Assistance in subjects like Math, Science, Business, IT, and more</li>
              <li>Experienced professionals with subject expertise</li>
              <li>Confidential and plagiarism-free work</li>
            </ul>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Why Choose Us?</h3>
            <ul className="animate-list list-disc list-inside text-zinc-600 dark:text-zinc-300">
              <li>24/7 support and communication</li>
              <li>Timely delivery with guaranteed results</li>
              <li>Affordable pricing with flexible plans</li>
              <li>Secure and confidential service</li>
              <li>100% satisfaction guaranteed</li>
            </ul>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">How It Works</h3>
            <ol className="animate-list list-decimal list-inside text-zinc-600 dark:text-zinc-300">
              <li>Share your course or assignment details with us</li>
              <li>We review and give you a quote</li>
              <li>Once approved, our experts get to work</li>
              <li>You receive completed tasks before the deadline</li>
            </ol>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Subjects We Cover</h3>
            <ul className="animate-list list-disc list-inside text-zinc-600 dark:text-zinc-300">
              <li>Mathematics and Statistics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Computer Science & Programming</li>
              <li>Business & Marketing</li>
              <li>English Literature & Composition</li>
            </ul>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Plagiarism-Free Guarantee</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Academic integrity is at the core of what we do. Every piece of work we deliver is written from scratch by qualified experts and passes through advanced plagiarism detection tools to ensure originality. We strictly avoid any form of copied or reused content, and our internal review team double-checks the authenticity before submission.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              You can submit our work with confidence, knowing it meets all academic standards and is 100% unique. We also provide plagiarism reports on request for added peace of mind.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Expert Tutors</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Our tutors aren't just random freelancers — they're seasoned professionals with academic degrees (Master's and PhDs) and teaching experience in universities and colleges worldwide. Each expert undergoes a rigorous selection process to ensure they meet our quality and ethics standards.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              From STEM to humanities, we match you with tutors who are fluent in the subject matter and know what professors expect from top-performing students.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Deadline-Oriented Workflow</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We understand how important deadlines are. Our workflow is designed to meet your timelines — even on short notice. We assign deadlines internally that are earlier than yours to ensure there's time for review and revisions if needed.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Whether it's a same-day quiz or a term paper due in a week, we deliver without compromising quality.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Confidentiality First</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Your privacy is our priority. We follow strict confidentiality protocols to ensure your personal details and academic information are never shared with third parties.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              All communications are encrypted, and we use secure payment gateways to protect your transactions. You remain anonymous even to the experts working on your projects.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Flexible Payment Options</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We believe affordability should not compromise quality. That's why we offer flexible payment models: pay in full, split in milestones, or use custom payment plans for long-term classes.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              You can also take advantage of seasonal discounts, loyalty programs, and referral bonuses that make our services even more accessible.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Real-Time Progress Tracking</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Stay in the loop without having to ask. We provide real-time updates on your project status via chat, email, or dashboard notifications. You'll know exactly what's done, what's pending, and when to expect delivery.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              This transparency allows you to feel in control of your academic workload even when you delegate the heavy lifting to us.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Discussion Boards & Forums</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Many online courses require regular participation in discussion forums. We take care of that by writing meaningful, insightful, and citation-backed posts that meet your word count and engagement criteria.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We also reply to classmates' posts as per your professor's instructions and maintain an authentic voice that matches your writing style.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Take-Home Exams & Timed Tests</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Our team is trained to handle tight exam windows and high-pressure environments. We can help you with take-home exams, open-book assessments, and even proctored online tests—following all necessary instructions and timing constraints.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Whether the test lasts 30 minutes or 3 hours, we deliver accurate, high-quality work within the exam window to ensure your success.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Essay & Research Paper Assistance</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Writing a compelling academic paper is an art—and we've mastered it. We help students craft well-researched, argument-driven essays and research papers with perfect formatting and referencing.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Our services cover everything from brainstorming ideas and outlining content to writing drafts, editing, proofreading, and citing sources in APA, MLA, Chicago, or Harvard style.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Group Project Support</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Working on group projects remotely can be chaotic. We assist by creating shared documents, contributing research, designing presentations, and managing task delegation—ensuring everyone's part is complete and cohesive.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We can even take the lead on full group submissions if needed, all while keeping your team aligned and stress-free.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Live Class Participation</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              If you're unable to attend live Zoom or Google Meet sessions, we've got you covered. Our experts can either assist you during the session or represent you discreetly—depending on your university's policy.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We take notes, answer questions, and ensure your presence is felt without you needing to be there in person.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Academic Honesty Policy</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We don't support cheating or misrepresentation. Our goal is to help you succeed responsibly. That means providing assistance to reduce stress, improve learning outcomes, and manage your workload ethically.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We encourage students to use our services as a tool—not a shortcut—and to understand the content they submit under their name.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Client Testimonials</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              We've helped thousands of students worldwide with everything from last-minute exams to full-semester support. Many have returned to us semester after semester, citing our reliability, professionalism, and quality as unmatched.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Check out our testimonials to hear real stories from real students who transformed their academic journey with our help.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Get Started Today</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Ready to take control of your academic stress? Getting started is easy. Simply contact us through live chat, email, or our secure contact form. Share your course or task details, and we'll give you a custom quote and timeline.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              From there, sit back and relax—we'll handle the rest. Because your success is our mission.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Exam Assistance Services</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Facing a tough exam and need help preparing or completing it? Our Exam Assistance Services are tailored for students who require expert-level support with online tests, proctored exams, and more. We ensure accuracy, discretion, and performance. Our professionals are well-versed in time-sensitive environments and can help you confidently tackle any challenge.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Whether it's a multiple-choice quiz, short answers, or essay-based assessments, we provide real-time exam assistance, answer verification, and result-oriented solutions across platforms like Blackboard, Canvas, Moodle, and more.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Assignment Help Services</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Struggling to meet your assignment deadlines? Let our team take over. We offer assignment help services that include research, drafting, formatting, editing, and citation support. Our writers cover a wide array of subjects—delivering work that's tailored to your academic level and university guidelines.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              From short weekly submissions to final-term papers, we handle it all. With attention to detail, original content, and error-free delivery, we make sure every assignment elevates your grade and reduces your academic stress.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Test Preparation Packages</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Prepare smarter, not harder. Our Test Preparation Packages are designed to help you succeed in midterms, finals, standardized tests, and certification exams. These packages include study guides, practice questions, personalized tutoring sessions, and strategy planning for timed tests.
            </p>
            <ul className="animate-list list-disc list-inside text-zinc-600 dark:text-zinc-300">
              <li>Customized revision schedules based on your syllabus</li>
              <li>Mock test simulations to build confidence</li>
              <li>One-on-one sessions with subject experts</li>
              <li>Tips on solving time-sensitive questions efficiently</li>
            </ul>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Whether it's GMAT, GRE, SATs, or subject-specific exams, our prep plans are built to boost your performance strategically.
            </p>
          </div>

          <div className="animate-section">
            <h3 className="animate-title text-xl font-semibold text-zinc-800 dark:text-zinc-100">Emergency Exam Support</h3>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Got an exam in a few hours and feeling unprepared? No problem. Our Emergency Exam Support is available 24/7 to help students in high-pressure situations. We act fast and deliver reliable support even at the last minute—no judgments, just results.
            </p>
            <p className="animate-paragraph text-zinc-600 dark:text-zinc-300">
              Whether you forgot about a test or need instant help navigating a difficult subject, our emergency service ensures you don't miss your chance to perform. Just send us the details, and we'll assign a qualified expert immediately.
            </p>
            <ul className="animate-list list-disc list-inside text-zinc-600 dark:text-zinc-300">
              <li>Immediate expert allocation</li>
              <li>Support for live and timed exams</li>
              <li>Secure and confidential handling</li>
              <li>Real-time communication throughout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedLongContent