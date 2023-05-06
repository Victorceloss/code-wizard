import { useEffect, useState } from "react";

import "../styles/blog.css";
import "../styles/responsive/responsiveBlog.css";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";
import { listAllContent } from "../services/TabnewsAPI.jsx";

const Blog = () => {
  const currentYear = new Date().getFullYear();
  const [allContent, setAllContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllContent = async () => {
    setIsLoading(true);

    const contentData = await listAllContent(currentPage);
    setAllContent(contentData);

    setIsLoading(false);
  }

  useEffect(() => {
    getAllContent();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  
  const handleNextPage = () => setCurrentPage(currentPage + 1);

  return (
    <>
    <Header />
    <main className="main-blog">
    <section className="blog-section-one">
        <h1 className="blog-title">CodeWizard&apos;s Blog</h1>
        <p className="blog-one-text">
          Join thousands of devs and accelerate toward your goals.
          Turn your career into a journey of continuous evolution through the best technologies.
        </p>
        <button className="blog-button">Newslatter</button>
      </section>
      <section className="blog-section-two">
        {isLoading && <div className="loading"></div>}
        <h3 className="section-two-copyright">© {currentYear} TabNews</h3>
      </section>
      <section className="section-pagination">
        <button className='button-pagination' onClick={handlePreviousPage}>Previous</button>
        <span className='current-page'>{currentPage}</span>
        <button className='button-pagination' onClick={handleNextPage}>Next</button>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Blog;