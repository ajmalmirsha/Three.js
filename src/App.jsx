import React, { useEffect, useRef } from "react";
import "./App.css";
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
 

  return (
    <>
      hello world
      <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
      </LocalizationProvider>
    </>
  );
}

export default App;
