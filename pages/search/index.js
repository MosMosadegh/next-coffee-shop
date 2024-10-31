import PageHeader from "@/component/module/PageHeader/PageHeader";
import Result from "@/component/templates/Search/Result";
import React from "react";

function Search({ data }) {
  console.log(data);
  return (
    <>
      <PageHeader route="Search" />
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch('/api/menu');
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}

export default Search;
