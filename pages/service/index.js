import PageHeader from "@/component/module/PageHeader/PageHeader";
import ServicesDetails from "@/component/templates/Services/ServicesDetails";
import React from "react";

function Service({ services }) {
  return (
    <>
      <PageHeader route="Service" />
      <ServicesDetails data={services} />
    </>
  );
}

export async function getStaticProps() {
  const serviceResponse = await fetch("/api/service");
  const servicesData = await serviceResponse.json();

  return {
    props: {
      services: servicesData,
    },
  };
}

export default Service;
