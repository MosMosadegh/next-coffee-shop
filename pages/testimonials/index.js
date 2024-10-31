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
  try {
  const res = await fetch('http://localhost:3000/api/comment');
  if (!res.ok) {
    throw new Error('Failed to fetch comment data');
  }
  const data = await res.json();

  return {
    props: {
      comment : data,
    },
    revalidate: 60 * 60 * 12, //second
  };
} catch (error) {
  return {
    props: {
      comment: [],
    },
    revalidate: 60*60*12 //second
  };
}
}

export default Testimonials;
