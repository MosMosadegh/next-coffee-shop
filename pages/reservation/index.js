import PageHeader from '@/component/module/PageHeader/PageHeader'
import React from 'react'
import Reservation from '@/component/templates/Index/Reservation'

function ReservationPage() {
  return (
    <>
    <PageHeader route= "Reservation" />
    <Reservation />
    </>
  )
}

export default ReservationPage