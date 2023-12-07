import { useContext } from "react";
import { ThemeContext } from "../Context/theme";

const About = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div id="about" className="flex flex-col items-center pt-24 pb-44 px-32 ">
      <h2 className="section-h1 underline mb-12 ">Expertise</h2>
      <div className="flex flex-col  md:justify-evenly lg:flex-row gap-12">
        <div
          className={`expertise-div ${
            dark
              ? "transition ease-in-out hover:bg-violet"
              : "transition ease-in-out hover:bg-tea-green"
          }`}
        >
          <h3 className="banner-h3 underline text-xl py-4">
            Frontend Development
          </h3>
          <p>
            —a web developer well-versed in HTML, CSS, JavaScript, React,
            Tailwind, Git, and basic SQL. My expertise lies in front-end
            development, where I merge technical skills with a passion for
            creating seamless digital experiences. I specialize in crafting
            user-centric interfaces and prototypes, aiming to marry
            functionality with striking design elements.
          </p>
        </div>
        <div
          className={`expertise-div ${
            dark
              ? "transition ease-in-out hover:bg-violet"
              : "transition ease-in-out hover:bg-tea-green"
          }`}
        >
          <h3 className="banner-h3 underline text-xl py-4 ">UX</h3>
          <p>
            -blending a background in graphic design with a keen understanding
            of user experience. My approach is rooted in empathy and user
            research, striving to create meaningful connections between users
            and digital products. With a focus on user needs and intuitive
            design, I craft experiences that resonate and enhance user
            interactions.
          </p>
        </div>
        <div
          className={`expertise-div ${
            dark
              ? "transition ease-in-out hover:bg-violet"
              : "transition ease-in-out hover:bg-tea-green"
          }`}
        >
          <h3 className="banner-h3 underline text-xl py-4">Graphic Design</h3>
          <p>
            —an experienced graphic designer with a knack for captivating visual
            storytelling. Proficient in creating aesthetically pleasing designs,
            my expertise spans from conceptualizing ideas to executing polished,
            eye-catching visuals. I bring an artist's eye for detail to every
            project, aiming to craft designs that not only look good but also
            communicate effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
