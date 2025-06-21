"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  blog: any;
}
const BlogCard = ({ blog }: Props) => {
  const short_description = `${blog?.blog_description.slice(0, 150)}...`;

  return (
    <Link href={`/blog/${blog.blog_slug}`}>
          <div className='group cursor-pointer'>
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-sky-500/20 hover:-translate-y-2 border border-sky-100 dark:border-gray-700">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={blog.blog_featured_image_url}
            alt={blog.blog_featured_image_alt}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          
          {/* Floating badge */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/90 dark:bg-gray-800/90 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-sky-400 backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50">
              Featured
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Meta information */}
          <div className="mb-3 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-sky-400">
            {blog.blog_title}
          </h3>
          
          {/* Description */}
          <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed"    dangerouslySetInnerHTML={{ __html: short_description }}>
          </p>
          
          {/* Read more button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-blue-600 dark:text-sky-400 transition-all duration-300 group-hover:gap-3">
              <span>Read More</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            
            {/* Progress indicator */}
            <div className="h-1 w-16 rounded-full bg-gray-200 dark:bg-gray-600">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 dark:from-sky-400 dark:to-blue-500 transition-all duration-700 group-hover:w-full"></div>
            </div>
          </div>
        </div>
        
        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 dark:from-sky-600 dark:via-blue-500 dark:to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></div>
        <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800 -z-10"></div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
