import "../styles/about.css";
import "../styles/responsive/responsiveAbout.css";

import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";
import ImageTwo from "../assets/images/image_two.jpg";

const About = () => {
  return (
    <>
    <Header />
    <main className="about-main">
      <section className="about-one">
        <h2 className="aboutUs-subtitle">About Us</h2>
          <h1 className="aboutUs-title">
            Passion for programming and commitment to your success
          </h1>
        <p className="aboutUs-text">
          At CodeWizard, we are committed to empowering people with programming skills.
          We believe that programming is a powerful tool that can change lives and 
          transform the world. With affordable courses and experienced teachers, we are 
          dedicated to helping our students achieve their goals and reach their full 
          potential. Join us and start your programming learning journey today!
        </p>  
      </section>
      <section className="about-two">
        <div className="about-two-info">
          <h2 className="about-two-subtitle">
            Our Passionate Teaching Team and Innovative Teaching Method
          </h2>
          <p className="about-two-text">
            The CodeWizard team is composed of experienced and passionate 
            instructors who are dedicated to teaching. Our teaching method is 
            innovative and designed to meet the needs of students at all skill
            levels. From complete beginners to experienced programmers, our curriculum
            is adaptable and personalized to meet each student&apos;s needs.
          </p>
        </div>
        <img src={ImageTwo} className='about-two-image' alt="" />
      </section>
      <section className="about-team">
        <h2 className="about-team-title">Our Team</h2>
        <div className="members-team">
          <div className="about-team-member">
            <h3 className="team-member-name">Victor Vasconcelos</h3>
            <h2 className="team-member-function">Development</h2>
          </div>
          <div className="about-team-member">
            <h3 className="team-member-name">João Calixto</h3>
            <h2 className="team-member-function">Text and Design</h2>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
};

export default About;