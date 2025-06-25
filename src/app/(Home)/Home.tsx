"use client"
import Banner from "./Banner";
import Solutions from "./Solutions";
import KnowUs from "./KnowUs";
import Divider from "./Divider";
import OurServices from "./OurServices";
import WorkProcess from "./WorkProcess";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import { Suspense, useEffect, useState } from "react";
import SitePopup from "@/components/SitePopup";
import LongContent from "./LongContent";

export default function Home() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("...");
  const [number, setNumber] = useState("");
  const [locationDetails, setLocationDetails] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);


  const fetchCity = async () => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    if (cityy !== null) {
      setCity(cityy as any);
    }
    if (countryy !== null) {
      setCountry(countryy as any);
    }

    const ipUrl = "https://api.ipify.org?format=json";

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(
        `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
      );


      if (!locationResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const locationData = await locationResponse.json();

      // CHANGES: im change the city to country
      let fetchedCity = locationData.country || "London"; // Set default value
      let fetchedCountry = locationData.countryCode || "GB"; // Set default value

      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
      setLocationDetails(locationData);
    } catch (error) {
      // If the API request fails, set default values
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

  useEffect(() => {
    const dynamicNumber: any = {
      US: "+3197005034911",
      MX: "+3197005034911",
      CA: "+3197005034911",
      AU: "+3197005034911",
      NZ: "+3197005034911",
      UK: "+3197005034911",
    };

    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+3197005034911");
    }
  }, [country]);

  useEffect(() => {
    const modalData = localStorage.getItem("modal");
    const storedTime = localStorage.getItem("modalTimestamp");

    if (modalData === "true" && storedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(storedTime, 10);
      const fiveHours = 1 * 60 * 1000;

      if (elapsedTime >= fiveHours) {
        localStorage.setItem("modal", "false");
      }
    }

    if (!modalData || modalData === "false") {
      const timer = setTimeout(() => {
        setModal(true);
      }, 50000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [modal]);


  return (
    <>     
     <div  onClick={() => setModal(false)}>
        {modal && <SitePopup setModal={setModal} locationDetails={locationDetails} />}
        <Suspense fallback={<>loading...</>}>
        <Banner locationDetails={locationDetails} />
        </Suspense>
        <Solutions />
        <KnowUs />
        <Divider />
        <OurServices />
        <LongContent/>
        <WorkProcess />
        <Faq />
        <Testimonials />
      </div>
</>

      );
}
