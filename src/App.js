import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Award from "./Award";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Interest from "./Interest";
import Skills from "./Skills";
import "./App.css";
const App = () => {
return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/experience" element={<Experience />} />
<Route path="/education" element={<Education />} />
<Route path="/skills" element={<Skills />} />
<Route path="/interests" element={<Interest />} />
<Route path="/awards" element={<Award />} />
</Routes>
</BrowserRouter>
</>
);
};
export default App;