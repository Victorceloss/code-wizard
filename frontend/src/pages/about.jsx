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
    </main>
    <Footer />
    </>
  )
};

export default About;