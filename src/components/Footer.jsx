import { useContext } from "react";
import { ThemeContext } from "../Context/theme";

const Footer = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section
      id="contact"
      className={`flex flex-col items-center pb-6 pt-6 ${
        dark ? "bg-violet" : "bg-tea-green"
      }`}
    >
      <h1 className="work-header">Get in contact!</h1>
      <div className="flex gap-16 items-center justify-evenly m-6">
        <div>
          <a
            href="mailto:katelynnperry99@gmail.com"
            className="text-2xl nav-li"
          >
            katelynnperry99@gmail.com
          </a>
        </div>
        <div>
          <ul className="flex flex-col">
            <a
              target="_blank"
              rel="noreferrer"
              className="nav-li text-2xl"
              href="https://uk.linkedin.com/in/katelynn-perry-6056ba204"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="nav-li text-2xl"
              href="https://github.com/katieperry4"
            >
              GitHub
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="nav-li text-2xl"
              href="https://drive.google.com/file/d/1LHvU-tMoVledHg6WFdYm3pPdqOftrivv/view"
            >
              CV
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
