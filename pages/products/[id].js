import React from 'react'

function Product() {
  return (
    <h1>Product Page</h1>
  )
}

export async function getStaticProps(context) {

  const {params} = context
  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json();
console.log({params})
  return {
    props: {
      product
    },

  };
}
export default Product