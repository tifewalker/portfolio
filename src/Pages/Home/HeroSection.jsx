import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Boluwatife Olawuyi</p>

          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              <Typewriter
                words={[
                  "WordPress Expert",
                  "MERN Stack Developer",
                  "React Developer",
                  "Graphics Designer",
                ]}
                loop={0} // 0 = infinite loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="hero--section-description">
            An experienced Application Engineer specializing in MERN Stack.
          </p>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
