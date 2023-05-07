import "../styles/home.css";
import "../styles/responsive/responsiveHome.css";

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
    <section className="section-plataform">
        <h2 className="plataform-title">Why choose the CodeWizard platform?</h2>
        <div className="plataform-div">
          <h3 className="plataform-div-title">
            <i class="fa-solid fa-graduation-cap"></i> Full training from scratch to initial opportunities in the field
          </h3>
          <p className="plataform-div-description">
            Start your journey towards your first technology job with our complete
            training program, covering everything from basic concepts to practical skills.
          </p>
        </div>
        <div className="plataform-div">
          <h3 className="plataform-div-title">
            <i class="fa-solid fa-code"></i> Specialization in advanced stacks
          </h3>
          <p className="plataform-div-description">
            Our specialization in cutting-edge, widely used technologies is designed 
            to help you become an expert in your area of interest. Explore the latest 
            tools and advance your IT career
          </p>
        </div>
        <div className="plataform-div">
          <h3 className="plataform-div-title">
            <i class="fa-solid fa-school"></i> Advanced and practical classes
          </h3>
          <p className="plataform-div-description">
            The advanced classes offered by our program are taught by technology experts 
            and based on real-world cases. Put your knowledge into practice, learn from mistakes, 
            and prepare to stand out in the IT market.
          </p>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default Home;