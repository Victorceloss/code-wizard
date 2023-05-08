import "../styles/home.css";
import "../styles/responsive/responsiveHome.css";

import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";
import ImageOne from "../assets/images/image_one.png";
import ImageThree from "../assets/images/image_three.jpg";

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
    <section className="section-learning">
      <div className="learning-title-div">
        <h2 className="title-div-title">Method designed to accelerate your evolution</h2>
        <h3 className="title-div-subtitle">
          We combine 3 pillars for you to gain experience, 
          master tools, and know how to position yourself professionally.
        </h3>
      </div>
      <div className="learning-pillars-all">
        <div className="pillars">
          <h3 className="pillars-title">Focus</h3>
          <p className="pillars-description">
            Programming is an infinite universe, so having focus is essential.
            We get straight to the point on what really matters for you to master 
            the tools, not just to know them.
          </p>
        </div>
        <div className="pillars">
          <h3 className="pillars-title">Practice</h3>
          <p className="pillars-description">
            Programming is a practical discipline. 
            It is the hours of code that will prepare you and give you the 
            necessary experience to make the best decisions in the real world
          </p>
        </div>
        <div className="pillars">
          <h3 className="pillars-title">Group</h3>
          <p className="pillars-description">
            The connection between Devs boosts your technical repertoire, behavioral skills, 
            and network of contacts. In addition to helping assimilate and fix all learning.
          </p>
        </div>
      </div>
    </section>
    <section className="section-final">
      <article className="final-image-div">
        <img src={ImageThree} alt="" className="final-image" />
        <div className="square-layout-two"></div>
      </article>
      <div className="final-text">
        <h2 className="final-text-title">We generate results by teaching programming</h2>
        <p className="final-text-description">
          Start moving forward right now toward your goals 
          and achieve your place as a dev.
        </p>
        <div className="info-buttons">
          <button className="buttons-started">Get Started</button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Home;