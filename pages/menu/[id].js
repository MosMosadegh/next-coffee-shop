import Comments from "@/component/templates/Product/Comments";
import ProductsDetails from "@/component/templates/Product/ProductDetails";
import React from "react";

function Product({ product, comments }) {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/menu");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log("productResp => ", params);
  const productRes = await fetch(
    `http://localhost:3000/api/product/${params.id}`
  );

  const productData = await productRes.json();
  console.log("Product Data =>> ", productData);

  if (!productData || productRes.status !== 200) {
    return {
      // notFound: true,
    };
  }

  const commentRes = await fetch("http://localhost:3000/api/comment");
  if (commentRes.status !== 200) {
    return {
      // notFound: true,
    };
  }
  const commentsData = await commentRes.json();

  const productComments = commentsData.filter(
    (comment) => comment.productID.toString() === params.id
  );

  return {
    props: {
      product: productData,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Product;
