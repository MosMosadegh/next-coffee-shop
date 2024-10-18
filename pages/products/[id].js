import Comments from "@/component/templates/Product/Comments";
import ProductsDetails from "@/component/templates/Product/ProductDetails";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

function Product({ product, comment }) {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comment} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu/`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const productRes = await fetch(`http://localhost:4000/menu/${params.id}`);
  const productData = await productRes.json();

  if(productRes.status !== 200) {
    return {
      redirect: {destination: "/"}
    }
  }

  const commentRes = await fetch(`http://localhost:4000/comment`);
  const commentsData = await commentRes.json();
 
  
  
  const productComment = commentsData.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product: productData,
      comment: productComment,
    },
    revalidate: 60* 60 * 12 //Second
  };
}
export default Product;
