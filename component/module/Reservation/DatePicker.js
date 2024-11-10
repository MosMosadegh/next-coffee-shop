import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker"

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function DatePickerComponent() {
    const [value, setValue] = useState(new Date())
  return (
    <DatePicker locale={persian_fa} calendar={persian}/>
    
  )
}

export default DatePickerComponent