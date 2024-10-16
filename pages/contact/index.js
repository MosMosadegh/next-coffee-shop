import PageHeader from '@/component/module/PageHeader/PageHeader'
import ContactDetails from '@/component/templates/Contact/ContactDetails'
import React from 'react'

function Contact() {
  return (
    <>
    <PageHeader route= "Contact" />
    <ContactDetails />
    </>
  )
}

export default Contact