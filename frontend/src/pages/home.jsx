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
        <div className="plataform-services">
          <div className="plataform-div">
            <h3 className="plataform-div-title">
              <i class="fa-solid fa-graduation-cap"></i> Complete Education
            </h3>
            <p className="plataform-div-description">
              Start from scratch and advance towards your first opportunities in the field.
            </p>
          </div>
          <div className="plataform-div">
            <h3 className="plataform-div-title">
              <i class="fa-solid fa-code"></i> Specialization Program
            </h3>
            <p className="plataform-div-description">
              Specialize in cutting-edge stacks, widely used in the market.
            </p>
          </div>
          <div className="plataform-div">
            <h3 className="plataform-div-title">
              <i class="fa-solid fa-school"></i> Advanced Classes
            </h3>
            <p className="plataform-div-description">
              Be among the best by exploring real-world cases in a practical way.
            </p>
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default Home;