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

  try {
 const serviceResponse = await fetch('http://localhost:3000/api/service')
 if (!serviceResponse.ok) {
  throw new Error('Failed to fetch service data');
}
const servicesData = await serviceResponse.json()

 const menuResponse = await fetch("http://localhost:3000/api/menu")
 if (!menuResponse.ok) {
  throw new Error('Failed to fetch menu data');
}
const menusData = await menuResponse.json()

 const testimonialResponse = await fetch('http://localhost:3000/api/comment')
 if (!testimonialResponse.ok) {
  throw new Error('Failed to fetch testimonial data');
}
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
} catch (error) {
  return {
    props: {
      data: {
        services: [],
        menu: [],
        testimonial: []
      },
    },
    revalidate: 60*60*12 //second
  };
}}


export default Index;
