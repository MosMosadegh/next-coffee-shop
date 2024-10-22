import PageHeader from '@/component/module/PageHeader/PageHeader'
import Pricing from '@/component/templates/Menu/Pricing';
import React from 'react'

function Menu({menus}) {
  return (
    <>
    <PageHeader route= "Menu" />
    <Pricing  data = {menus}/>
    </>
  )
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:3000/api/menu");
  const menuData = await menuResponse.json();

  return {
    props: {
      menus: menuData,
    },
    revalidate: 60*60*12 //second
  };
}

export default Menu