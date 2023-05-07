import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Blog from "../pages/blog";
import Post from "../pages/postContent";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/:name/:slug" element={ <Post /> } />
      </Routes>
    </BrowserRouter>
  );
};