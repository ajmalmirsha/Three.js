// import {useParams} from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import "./App.css";
import Test from "./Test";
function App() {
  return (
    <>    
    <Routes  >
      <Route path="/home" element={<Test/>} />
    </Routes>
    <Routes  >
      <Route path="/about" element={<>about</>} />
    </Routes>
    </>
  );
}

export default App;
