import React from "react";

import About from "@/component/templates/Index/About";
import Slider from "@/component/templates/Index/Slider";
import Services from "@/component/templates/Index/Services";
import Offer from "@/component/templates/Index/Offer";
import Menu from "@/component/templates/Index/Menu";
import Reservation from "@/component/templates/Index/Reservation";
import Testimonial from "@/component/templates/Index/Testimonial";

function Index({data}) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services}/>
      <Offer />
      <Menu menuData= {data.menu} />
      <Reservation />
      <Testimonial testimonialData = {data.testimonial}/>
    </>
  );
}

export async function getStaticProps() {
 const serviceResponse = await fetch('http://localhost:4000/services')
const servicesData = await serviceResponse.json()

 const menuResponse = await fetch('http://localhost:4000/menu')
const menusData = await menuResponse.json()

 const testimonialResponse = await fetch('http://localhost:4000/comment')
const testimonialData = await testimonialResponse.json()

  return {
    props: {
      data: {
        services: servicesData,
        menu: menusData,
        testimonial: testimonialData
      },
    },
    revalidate: 60*60*12 //second
  };
}

export default Index;
