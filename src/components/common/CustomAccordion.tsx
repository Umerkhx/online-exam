"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  title: string;
  description: string;
}

const CustomAccordion = ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const faqElement = document.getElementById("faq-description");
    if (faqElement) {
      faqElement.style.color = "red";
    }
  }, []);

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-sky-200 dark:border-sky-700 shadow-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 dark:hover:from-sky-900/50 dark:hover:to-blue-900/50 transition-all duration-200 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-sky-300 transition-colors duration-200">
          {title}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-600 dark:text-sky-400 transition-transform duration-200" />
          ) : (
            <ChevronDown className="h-5 w-5 text-blue-600 dark:text-sky-400 transition-transform duration-200" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 border-t border-sky-100 dark:border-sky-800">
          <div
            className="faq-description text-gray-700 dark:text-gray-300 pt-4 leading-relaxed [&_span]:text-gray-700 dark:[&_span]:!text-gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;