import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Blog from "../pages/blog";
import About from "../pages/about";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  );
};