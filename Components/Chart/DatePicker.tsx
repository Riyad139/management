import * as React from 'react'

import Box from '@mui/material/Box'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function DatePickers() {
   const [value, setValue] = React.useState<Date | null>(new Date())

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
            label="Select date"
            value={value}
            onChange={newValue => {
               setValue(newValue)
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
               <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
               </Box>
            )}
         />
      </LocalizationProvider>
   )
}
