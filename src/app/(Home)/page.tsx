import React from 'react'
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./Home'), { ssr: false });

function page() {
  return (
    <div>
        <Home/>
    </div>
  )
}

export default page