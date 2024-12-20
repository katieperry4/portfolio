import { useContext } from "react";
import { ThemeContext } from "../Context/theme";
import {
  cv,
  cvWhite,
  email,
  emailWhite,
  github,
  githubWhite,
  linkedin,
  linkedinWhite,
} from "../assets/icons";

const Contact = () => {
  const { dark } = useContext(ThemeContext);
  let currentYear = new Date().getFullYear();
  return (
    <section
      id="contact"
      className={`flex flex-col items-center pb-12 pt-12 ${
        dark ? "bg-violet" : "bg-tea-green"
      }`}
    >
      <h1 className="text-4xl">Get in contact!</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-evenly m-6">
        <div>
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a
                href="mailto:katelynn-perry@comcast.net"
                className="nav-li text-xl"
              >
                <img
                  className="inline contact-icon"
                  src={dark ? emailWhite : email}
                  alt="email icon"
                />
                katelynn-perry@comcast.net
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-li text-xl"
                href="https://www.linkedin.com/in/katelynn-perry-6056ba204"
              >
                <img
                  className="inline contact-icon"
                  src={dark ? linkedinWhite : linkedin}
                  alt="linkedin icon"
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-li text-xl"
                href="https://github.com/katieperry4"
              >
                <img
                  className="inline contact-icon"
                  src={dark ? githubWhite : github}
                  alt="github icon"
                />
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-li text-xl"
                href="https://drive.google.com/file/d/1HJvGiRxWPe9VJ2vrUxk8ghBSMMo1R35u/view?usp=sharing"
              >
                <img
                  className="inline contact-icon"
                  src={dark ? cvWhite : cv}
                  alt="cv icon"
                />
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>&copy; Copyright {currentYear} Katelynn Perry</footer>
    </section>
  );
};

export default Contact;
