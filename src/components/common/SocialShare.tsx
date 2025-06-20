import React from 'react';
import { Facebook, Linkedin, Twitter, Share } from 'lucide-react';

type SocialShareProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
};

const SocialShare = ({ imageUrl, title, description }: SocialShareProps) => {
  // Mock pathname and BASE_URL - replace with your actual implementation
  const pathname = "/blog/sample"; // This would come from usePathname() in Next.js
  const BASE_URL = "https://techdept.mmecloud.tech";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}${pathname}`,
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${BASE_URL}${pathname}`,
    twitter: `https://twitter.com/share?url=${BASE_URL}${pathname}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${BASE_URL}${pathname}&media=${imageUrl}&description=${description}`,
  };

  const socialButtons = [
    {
      name: 'Facebook',
      url: shareLinks.facebook,
      icon: Facebook,
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      name: 'LinkedIn',
      url: shareLinks.linkedIn,
      icon: Linkedin,
      bgColor: 'bg-blue-700 hover:bg-blue-800',
      textColor: 'text-white'
    },
    {
      name: 'Twitter',
      url: shareLinks.twitter,
      icon: Twitter,
      bgColor: 'bg-sky-500 hover:bg-sky-600',
      textColor: 'text-white'
    },
    {
      name: 'Pinterest',
      url: shareLinks.pinterest,
      icon: Share,
      bgColor: 'bg-red-600 hover:bg-red-700',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-sky-200 dark:border-sky-700 shadow-lg">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2">
          <Share className="h-5 w-5 text-blue-600 dark:text-sky-400" />
          Share this article
        </h3>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {socialButtons.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bgColor} ${social.textColor} p-3 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg flex items-center justify-center group`}
                title={`Share on ${social.name}`}
              >
                <IconComponent className="h-5 w-5" />
              </a>
            );
          })}
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Help others discover this content by sharing it on your favorite platform
        </p>
      </div>
    </div>
  );
};

export default SocialShare;