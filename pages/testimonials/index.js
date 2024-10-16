import PageHeader from "@/component/module/PageHeader/PageHeader";
import Comments from "@/component/templates/Testimonial/Comments";
import React from "react";

function Testimonials({ comment }) {
  return (
    <>
      <PageHeader route="Testimonials" />
      <Comments data={comment} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/comment");
  const data = await res.json();

  return {
    props: {
      comment : data,
    },
    revalidate: 60 * 60 * 12, //second
  };
}

export default Testimonials;
