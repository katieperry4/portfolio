import { Link } from "react-router-dom";
import { cmsBlog, colors, memory, catFilter } from "../assets/work";
import ombros from "../assets/work/ombros.webp";
const Work = () => {
  return (
    <div id="work" className="m-6 md:m-32">
      <h2 className="section-h1">Work</h2>
      <div className="py-4">
        <p className="md:w-1/2">
          Welcome to my portfolio! Here, I showcase a blend of personal and
          professional projects that highlight my journey and passion for
          crafting engaging digital experiences. Explore a curated collection
          that features both personal endeavors and a professional project,
          offering a glimpse into my creative endeavors and technical expertise.
        </p>
      </div>
      {/* React Projects */}
      <div className="py-12">
        <h3 className="work-header">Projects</h3>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-4">
          <li className="work-li card">
            <Link
              to="/projects/ombros"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={ombros}
                alt="A screenshot of Ombros do Montejunto webpage"
              />
              <h3 className="text-2xl">Ombros do Montejunto</h3>
              <h4>HTML, CSS, JS, React</h4>
            </Link>
          </li>
          <li className="work-li card">
            <Link
              to="/projects/cms"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={cmsBlog}
                alt="A screenshot of my blog page"
              />
              <h3 className="text-2xl">CMS Blog</h3>
              <h4>HTML, CSS, JS, React</h4>
            </Link>
          </li>
          <li className="work-li card">
            <Link
              to="projects/cats"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={catFilter}
                alt="A screenshot of my cat filter page"
              />
              <h3 className="text-2xl">Cat Filter</h3>
              <h4>HTML, CSS, JS, React</h4>
            </Link>
          </li>
          <li className="work-li card">
            <Link
              to="projects/memory"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={memory}
                alt="A screenshot of my memory game page"
              />
              <h3 className="text-2xl">Memory Game</h3>
              <h4>HTML, CSS, JS</h4>
            </Link>
          </li>
          {/* colors */}
          <li className="work-li card">
            <Link
              to="projects/colors"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={colors}
                alt="A screenshot of my color palette page"
              />
              <h3 className="text-2xl">Color Palette</h3>
              <h4>HTML, CSS, JS</h4>
            </Link>
          </li>
        </ul>
      </div>
      {/* JS Projects */}
      {/* <div className="py-12">
        <h3 className="work-header">JavaScript Projects</h3>
        <ul className="flex flex-col md:flex-row gap-8 md:gap-4">
          
          <li className="flex flex-col work-li card">
            <Link
              to="projects/memory"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={memory}
                alt="A screenshot of my memory game page"
              />
              <h4 className="text-2xl">Memory Game</h4>
              <h5>Web Development</h5>
            </Link>
          </li>
          
          <li className="flex flex-col work-li card">
            <Link
              to="projects/colors"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full"
                src={colors}
                alt="A screenshot of my color palette page"
              />
              <h4 className="text-2xl">Color Palette</h4>
              <h5>Web Development</h5>
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Work;
