// import { useContext } from "react";
// import { ThemeContext } from "../Context/theme";

const About = () => {
  // const { dark } = useContext(ThemeContext);
  return (
    <div id="about" className="flex flex-col pt-24 pb-18 px-4 md:px-32 ">
      <h2 className="section-h1 mb-12 ">Expertise</h2>
      <div className="flex flex-col items-start  md:justify-evenly md:flex-row md:gap-12 gap-4 w-10/12">
        <div className={`expertise-div`}>
          <h3 className="banner-h3 underline text-xl ">
            Software Engineering
          </h3>
          <p>
          I hold a B.S. in Software Engineering and specialize in building reliable, scalable applications 
          with a focus on C# and .NET. My expertise spans full-stack and cross-platform mobile 
          development, with experience in designing intuitive user interfaces and managing relational databases to 
          ensure secure and efficient data storage.
          <br></br>
          <br></br>
          In addition to my core skills, I have worked with desktop applications using WinForms and explored 
          a variety of languages and frameworks, including Java, Python, and Express.js. I have a strong 
          foundation in software engineering principles such as object-oriented programming, 
          design patterns, and clean, maintainable code.
          <br></br>
          <br></br>
          I am passionate about learning new technologies and quickly applying them to solve real-world problems.
           My ability to adapt and expand my skill set enables me to take on diverse challenges and deliver 
           impactful, high-quality solutions.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
