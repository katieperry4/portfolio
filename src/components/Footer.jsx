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

const Footer = () => {
  const { dark } = useContext(ThemeContext);
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
                className="nav-li text-2xl"
              >
                <img
                  className="inline"
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
                className="nav-li text-2xl"
                href="https://uk.linkedin.com/in/katelynn-perry-6056ba204"
              >
                <img
                  className="inline"
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
                className="nav-li text-2xl"
                href="https://github.com/katieperry4"
              >
                <img
                  className="inline"
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
                className="nav-li text-2xl"
                href="https://drive.google.com/file/d/1s0TLDF4KYB8-bf7FEB9bd-scWgbwd7M8/view?usp=sharing"
              >
                <img
                  className="inline"
                  src={dark ? cvWhite : cv}
                  alt="cv icon"
                />
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
