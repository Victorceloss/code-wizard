import "../styles/home.css";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import ImageOne from "../assets/images/image_one.png";

const Home = () => {
  return (
    <>
    <Header />
    <main className="main">
      <section className="section-info">
        <h2 className="info-title">Programming Simplified</h2>
        <h3 className="info-subtitle">Tutorials, Tips, and Tricks for All Levels</h3>
        <p className='info-text'>
          The world of programming can seem intimidating, but it doesn&apos;t 
          have to be. Here, we offer tutorials, tips, and tricks for all levels 
          of programming, from beginners to experienced programmers. Our resources 
          are designed to make programming simpler and more accessible to everyone.
        </p>
        <div className="info-buttons">
          <button className="buttons-started">Get Started</button>
        </div>
      </section>
      <section className="section-image">
        <img src={ImageOne} alt="" className="image-content" />
        <div className='square-layout'></div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Home;