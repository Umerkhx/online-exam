"use client"
import { CheckCheckIcon, HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'


function AfterPaymentThank() {
  const name = localStorage.getItem('name')
  const phone = localStorage.getItem('phone')

  const router = useRouter();
  const qp = useSearchParams();

  useEffect(() => {
    const hasQueryParam = qp.size !== 0;

    if ((!name && !phone) || !hasQueryParam) {
      router.replace("/not-found");
    }
  }, [name, phone, qp, router]);


  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
        <div className='grid grid-cols-1 gap-4 '>
          <div className='flex justify-center items-center '>
            <div className="flex items-center justify-center rounded-full bg-violet-600 px-4 py-2 font-semibold text-zinc-200">
              <CheckCheckIcon className="mr-2 h-5 w-5" />
              <span>Thank You for Your Order and Payment!</span>
            </div>
          </div>
          <div className='flex justify-center items-center '>
            <div className="m flex items-center justify-center rounded-full bg-green-600 px-4 py-2 font-semibold text-zinc-200">
              <CheckCheckIcon className="mr-2 h-5 w-5" />
              <span>We Have Recieved Your Payment</span>
            </div>
          </div>


        </div>

        <h1 className="mt-6 text-xl font-medium tracking-tight  sm:text-2xl">
          Dear <span className=' font-bold'>{name || 'user'}</span>.
        </h1>
        <h1 className="pt-3 lg:w-[610px] mx-auto text-lg font-medium  sm:text-xl">
          Thank you for your order! Enjoy a special 40% discount. Check WhatsApp at <span className='font-bold'>{phone}</span> for details!
        </h1>
        <p className="md:mt-4 mt-2 lg:px-52 px-10">
          Thank you for your order and payment! We’re excited to have you with us and are already working to fulfill your request.

          A confirmation email with your order and payment details has been sent to you. If you have any questions or need assistance, please feel free to reach out. Our team is here to ensure you have a seamless experience. Thank you for trusting us with your order!</p>
        <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">
          <Link href="/" className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg" prefetch={false} >
            <HomeIcon className='mr-2' /> Return To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AfterPaymentThank