import Image from "next/image";
import Banner from "./Banner";
import Solutions from "./Solutions";
import KnowUs from "./KnowUs";
import Divider from "./Divider";
import OurServices from "./OurServices";
import WorkProcess from "./WorkProcess";
import Faq from "./Faq";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <> 
      <Banner />
      <Solutions />
      <KnowUs/>
      <Divider/>
      <OurServices/>
      <WorkProcess/>
      <Faq/>
      <Testimonials/>
    </>

  );
}
