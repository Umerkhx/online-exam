import React from "react";
import Order from "./Order";
import { TopicProvider } from "../TopicContext";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Order Now | Taking My Classes Online",
  description: `Taking my classes online order form with complete details. So, hire professionals to take my class online. ⭐⭐⭐⭐⭐`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/order-now",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function Page() {
  return (
    <div>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Order Now | Taking My Classes Online"
        />
        <meta
          property="og:description"
          content="Taking my classes online order form with complete details. So, hire professionals to take my class online. ⭐⭐⭐⭐⭐"
        />
        <meta
          property="og:url"
          content="https://takingmyclassesonline.com/take-my-exam"
        />
        <meta property="og:site_name" content="Takingmyclassesonline" />
        <meta
          property="og:image"
          content="https://takingmyclassesonline.com/assets/weblogo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://takingmyclassesonline.com/assets/popupModal.webp"
        />
        <meta property="og:image:width" content="1050" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:alt"
          content="Order Now | Taking My Classes Online"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta
          property="article:published_time"
          content="2024-11-23T02:45:46-04:00"
        />
        <meta
          property="article:modified_time"
          content="2024-11-23T06:15:41-04:00"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/takingmyclassesonline/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Order Now | Taking My Classes Online"
        />
        <meta
          name="twitter:description"
          content="Taking my classes online order form with complete details. So, hire professionals to take my class online. ⭐⭐⭐⭐⭐"
        />
        <meta name="twitter:creator" content="@takemyclas19231" />
        <meta
          name="twitter:image"
          content="https://takingmyclassesonline.com/assets/weblogo.png"
        />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="51 minutes" />
      </Head>
      <TopicProvider>
        <Order />
      </TopicProvider>
    </div>
  );
}

export default Page;
