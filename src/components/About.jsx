// import { useContext } from "react";
// import { ThemeContext } from "../Context/theme";

const About = () => {
  // const { dark } = useContext(ThemeContext);
  return (
    <div id="about" className="flex flex-col pt-24 pb-18 px-4 md:px-32 ">
      <h2 className="section-h1 mb-12 ">Expertise</h2>
      <div className="flex flex-col items-center md:justify-evenly lg:flex-row gap-12">
        <div className={`expertise-div`}>
          <h3 className="banner-h3 underline text-xl py-4">
            Software Development
          </h3>
          <p>
            —I am proficient in HTML, CSS, JavaScript, React, Git, and
            PostgreSQL. I blend technical proficiency with a passion for
            delivering seamless digital experiences. I aim to harmonize
            functionality with captivating design elements. Currently, I am
            expanding my skill set to include C#, .NET, ASP.NET Core MVC, and
            Web API development, further enhancing my capabilities to offer
            comprehensive software solutions.
          </p>
        </div>
        <div className={`expertise-div`}>
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
        <div className={`expertise-div`}>
          <h3 className="banner-h3 underline text-xl py-4">Graphic Design</h3>
          <p>
            —an experienced graphic designer with a knack for captivating visual
            storytelling. Proficient in creating aesthetically pleasing designs,
            my expertise spans from conceptualizing ideas to executing polished,
            eye-catching visuals. I bring an artist&apos;s eye for detail to
            every project, aiming to craft designs that not only look good but
            also communicate effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
