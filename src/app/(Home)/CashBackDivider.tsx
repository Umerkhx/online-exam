import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { CtaButtons } from './Banner';

export const CashbackDivider = () => {
  const whatsappNumber = "3197005034911";
  const whatsappMessage = "Hi! I'm interested in the 10% cashback offer.";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`)}&bgcolor=ffffff&color=000000`;

  return (
    <div className="relative lg:pt-32 pt-44">
      {/* Floating decorative elements */}
      <div className="absolute -top-8 left-1/4 w-4 h-4 bg-sky-400/20 rounded-full animate-pulse"></div>
      <div className="absolute -top-4 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-1/4 w-3 h-3 bg-sky-300/40 rounded-full animate-pulse delay-700"></div>
      
      <div className="absolute -top-12 sm:-top-16 md:-top-20 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-6">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Main banner card */}
          <div className="relative bg-gradient-to-tr from-neutral-950 via-neutral-900 to-sky-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-sky-700/50 shadow-2xl overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-20 h-20 bg-sky-400/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
            
            {/* Sparkle decoration */}
            <div className="absolute top-3 right-3 text-sky-300/60">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-center">
              {/* Left Content */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    {/* Offer badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-400/30 rounded-full px-3 py-1 mb-3">
                      <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                      <span className="text-sky-200 text-xs font-medium">LIMITED TIME</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-200 mb-1 sm:mb-2 leading-tight">
                      10% Cashback
                    </h3>
                    <p className="text-sky-100/90 text-xs sm:text-sm font-medium">
                      On every purchase - limited time offer!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center md:justify-start">
                    <CtaButtons/>
                  </div>

                  <p className="text-xs text-sky-200/60 hidden sm:block">
                    *New customers only. Terms apply.
                  </p>
                </div>
              </div>

              {/* Right Content - QR Code */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* QR Code container with enhanced styling */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-sky-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  
                    
                    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-inner">
                      <img
                        src={qrCodeUrl}
                        alt="Scan to chat on WhatsApp"
                        className="w-20 h-20 md:w-32 md:h-32 mx-auto"
                      />
                    </div>
                    
                    {/* QR Code label */}
                    <div className="text-center mt-2">
                      <p className="text-xs text-sky-100/80 font-medium">Scan to Chat</p>
                      <p className="text-xs text-sky-200/60">on WhatsApp</p>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
          
      
        </div>
      </div>
    </div>
  );
};