import "../styles/blog.css";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

const Blog = () => {
  const currentYear = new Date().getFullYear();
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
        <h3 className="section-two-copyright">© {currentYear} TabNews</h3>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Blog;