import { Meteors } from '@/components/ui/meteors';
import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  meteorCount: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, meteorCount }) => {
  return (
    <div className="flex justify-center items-center hover:scale-105 transition ease-in duration-300 delay-200">
      <div className="relative w-full max-w-xs">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border mb-4 border-gray-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-2 w-2 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </div>

          <h3 className="font-bold text-xl text-white mb-4">{title}</h3>
          <p className="font-normal text-base text-slate-500 mb-4">{description}</p>

          <Link href={'/order-now'} className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 hover:bg-sky-500 transition ease-in delay-150 duration-150">{buttonText}</Link>
          <Meteors number={meteorCount} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;