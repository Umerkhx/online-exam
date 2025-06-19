import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CookieDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function CookieDialog({ isOpen, setIsOpen }: CookieDialogProps) {
  const saveCookies = () => {
    // Save cookie data in localStorage
    localStorage.setItem(
      "customCookies",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
    );
    // Close the dialog
    setIsOpen(false);
  };

  if (!isOpen) return null; // Do not render the component if it is not open

  return (
    <div className="md:hidden  bottom-4 left-5 right-5 w-auto p-4 bg-blue-100 border-2 border-blue-500 z-[99999999] rounded-xl shadow-xl">
      <p className="text-zinc-800 text-sm font-medium leading-normal">
        Taking My Classes Online Uses Cookies to Ensure You Get the Best User Experience.{" "}
        <Link href="/privacy-policy" target="_blank" className="text-black underline">
          Our Privacy Policy
        </Link>
      </p>
      <div className="mt-4 flex items-center justify-between">
        <button
          className="bg-[#0a1924] flex items-center gap-1 hover:-translate-y-1 transition transform ease-in duration-200 text-zinc-100 font-medium px-4 py-2 rounded-md"
          onClick={saveCookies}
        >
          <Image src={'/icons8-accept-50.png'} width={24} height={24} alt="accept" />
          Accept
        </button>
        <button
          className="bg-gray-100 flex items-center gap-1 hover:-translate-y-1 transition transform ease-in duration-200 text-[#0c293f] font-medium px-4 py-2 rounded-md"
          onClick={() => setIsOpen(false)}
        >
          <Image src={'/cancel-icon.png'} width={24} height={24} alt="cancel" />
          Cancel
        </button>
      </div>
    </div>
  );
}
