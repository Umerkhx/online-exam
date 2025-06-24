"use client";

import CookieConsent from '@/app/(Home)/CookieConsent';
import CookieConsentMobile from '@/app/(Home)/CookieConsentMobile';
import { Cookie } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function ClientLayout() {
    const [cookiePopup, setCookiePopup] = useState(false);
    const [cookiePopupMobile, setCookiePopupMobile] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("customCookies");
        console.log(token);

        setTimeout(() => {
            if (token === null) {
                setCookiePopup(true);
            }
        }, 1000);
    }, []);

    return (
        <>
            <div> 
                {cookiePopup && (
                    <div
                        onClick={() => setCookiePopupMobile(true)}
                        className="md:hidden flex items-center transition-all duration-300 ease-in-out fixed -left-2 top-[45%]  z-[99999] scale-75"
                    >
                        <button aria-label='cookie-button' className="w-12 h-12 flex items-center justify-center bg-white rounded rounded-tr-xl rounded-br-xl rounded-tl-none rounded-bl-none shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                            <Cookie className="w-6 h-6 text-purple-600" />
                        </button>
                    </div>
                )}
                {cookiePopup && <CookieConsent />}
                {cookiePopupMobile && <CookieConsentMobile setCookiePopup={setCookiePopup} />}
            </div>
        </>
    );
}

export default ClientLayout;
