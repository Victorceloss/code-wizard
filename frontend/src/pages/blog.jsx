import "../styles/blog.css";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

const Blog = () => {
  return (
    <>
    <Header />
    <main className="blog-main">
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
        {!isLoading && allContent && allContent.map((post) => {
          return (
            <Post key={post.id} postData={post}/>
          );
        })}
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