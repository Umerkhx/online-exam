import React from 'react';
import { Calendar, User, Tag, Share2 } from 'lucide-react';
import CustomAccordion from '@/components/common/CustomAccordion';
import SocialShare from '@/components/common/SocialShare';

// Mock refactorDate function - replace with your actual implementation
const refactorDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogDetails = ({ blog }: { blog: any }) => {
  const cleanSchema = (schemaString: string) => {
    try {
      try {
        const parsedSchema = JSON.parse(schemaString);
        return parsedSchema;
      } catch {
        console.log("Schema is not valid JSON; applying transformations...");
      }

      const validSchema = schemaString
        .replace(/\s*}\s*{/g, "},{")
        .replace(/^{/, "[{")
        .replace(/}$/, "}]");

      return JSON.parse(validSchema);
    } catch (error: any) {
      console.error("Error parsing schema:", error.message);
      return null;
    }
  };
  
  const schema = cleanSchema(blog?.custom_schema);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        id="schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Meta tags */}
      <meta property="og:title" content={blog?.blog_title} />
      <meta property="og:description" content={blog?.blog_description} />
      <meta property="og:image" content={blog?.blog_featured_image_url} />
      <meta
        property="og:url"
        content={`https://takingmyclassesonline.com/blog/${blog?.blog_slug}`}
      />

      <div className="container max-w-[1100px] mx-auto px-4 pt-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {blog?.blog_title}
          </h1>
          
          {/* Author Info */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-sky-200 dark:border-sky-700">
              <img
                className="rounded-full ring-2 ring-sky-300 dark:ring-sky-600"
                src={blog?.blog_author_gravatar}
                alt="author-avatar"
                width={40}
                height={40}
              />
              <div className="text-left">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <User className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                  <p className="font-semibold text-sm lg:text-base">
                    {blog?.blog_author_name}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                  <p className="text-sm" suppressHydrationWarning>
                    {refactorDate(blog?.blog_posted_date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-sky-200 dark:border-sky-700">
          <img
            className="w-full h-auto object-cover"
            src={blog?.blog_featured_image_url}
            alt={blog?.blog_featured_image_alt}
            style={{ maxHeight: '600px' }}
          />
        </div>

        {/* Blog Content */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-sky-200 dark:border-sky-700 shadow-lg">
          <div
            className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200 leading-relaxed blog-description"
            dangerouslySetInnerHTML={{ __html: blog?.blog_description }}
          />
        </div>

        {/* Tags Section */}
        {blog?.blog_tags && blog.blog_tags.length > 0 && (
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-sky-200 dark:border-sky-700 shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                <Tag className="h-5 w-5 text-blue-600 dark:text-sky-400" />
                <span>Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.blog_tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-sky-100 dark:from-sky-800 dark:to-blue-800 text-blue-800 dark:text-sky-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-sky-600 hover:from-blue-200 hover:to-sky-200 dark:hover:from-sky-700 dark:hover:to-blue-700 transition-all duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {blog?.faqs?.length > 0 && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-sky-800 dark:from-gray-800 dark:to-blue-900 text-white rounded-2xl p-6 mb-6 shadow-lg">
              <h2 className="text-xl lg:text-2xl font-bold text-center">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {blog.faqs.map((faq: any, index: number) => (
                <CustomAccordion
                  key={index}
                  title={faq.title}
                  description={faq.description || ""}
                />
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Section */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-sky-200 dark:border-sky-700 shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                className="rounded-full ring-4 ring-blue-200 dark:ring-sky-600"
                src={blog?.blog_author_gravatar}
                alt="author-avatar"
                width={60}
                height={60}
              />
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                Author: <span className="text-blue-600 dark:text-sky-400">{blog?.blog_author_name}</span>
              </h2>
            </div>
            
            {blog?.blog_author_bio && (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {blog.blog_author_bio}
              </p>
            )}
          </div>
        </div>

        {/* Social Share */}
        <div className="pb-20">
          <SocialShare
            imageUrl={blog?.blog_featured_image_alt}
            title={blog?.blog_title}
            description={blog?.blog_description}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;