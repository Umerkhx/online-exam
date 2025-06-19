import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function CookieConsentMobile({setCookiePopup}:any) {
    const [shouldAnimateOut, setShouldAnimateOut] = useState(false);
  
    const saveCookies = () => {

    
        localStorage.setItem(
          "customCookies",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ");
        setShouldAnimateOut(true);
        setCookiePopup(false);
        };
      
  return (
    <div className= {`w-[280px] swipe-box p-4 bg-blue-100 border-2 border-blue-500 fixed bottom-32 md:bottom-4 md:left-5 left-[60px] z-[999999] rounded-xl shadow-xl  ${shouldAnimateOut ? "swipe-box-right" : "swipe-box-left"}`}>
    <p className="text-zinc-800 text-sm font-medium leading-normal">
      Taking My Classes Online Uses Cookies to Ensure You Get the Best User Experience.
      {" "}
      <Link href="/privacy-policy" target="_blank" className="text-black underline">Our Privacy Policy</Link>
    </p>
    <div className="mt-4  mx-auto flex items-center justify-between scale-90">
      <button className="bg-[#0a1924] flex gap-1 hover:-translate-y-2 transition ease-in duration-200 delay-100 text-zinc-100 font-medium px-4 py-2 rounded-md" onClick={saveCookies}> <Image src={'/icons8-accept-50.png'} width={24} height={24} alt='accept'></Image> Accept </button>
      <button className="bg-gray-100 font-medium flex gap-1 hover:-translate-y-2 transition ease-in duration-200 delay-100 text-[#0c293f] px-4 py-2 rounded-md" onClick={saveCookies}><Image src={'/cancel-icon.png'} width={24} height={24} alt='accept'></Image> Cancel</button>
    </div>
  </div>
  )
}

export default CookieConsentMobile