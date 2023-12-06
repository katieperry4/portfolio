import { Arrow } from "../../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import { memory } from "../../assets/work/";

const Memory = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <Arrow />
      <div className="flex ">
        {/* sidebar */}
        <div>
          <button
            onClick={() => history.back()}
            className={`btn ${
              dark
                ? "bg-violet hover:bg-light-red"
                : "bg-tea-green hover:bg-light-red"
            }`}
          >
            Back
          </button>
        </div>
        {/* main content */}
        <div>
          <div className="flex flex-col lg:flex-row py-20 px-6">
            {/* text */}
            <div className="w-full">
              <h1 className="work-header">Memory Game</h1>
              <p className="w-4/5 pl-6">
                Dive into a simple yet engaging memory game I built using
                JavaScript. This project aims to entertain while exercising your
                memory skills. Players can enjoy flipping cards to find matching
                pairs in a colorful, user-friendly interface. <br></br>
                <br></br>It's a humble creation that showcases my interest in
                crafting enjoyable web experiences through JavaScript.
              </p>
              <Link
                to="https://katies-memory-game.netlify.app/"
                target="_blank"
              >
                <button
                  className={`btn ${
                    dark
                      ? "bg-violet hover:bg-light-red"
                      : "bg-tea-green hover:bg-light-red"
                  }`}
                >
                  Live Site
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-3/5 rounded opacity-70 hover:opacity-100"
                src={memory}
                alt="Screenshot of my blog page"
              />
            </div>
          </div>
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-24">
            {/* branding and UX*/}
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              {/* <img
                className="w-1/2 rounded"
                src={cmsHome}
                alt="a screenshot of the blog page"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
