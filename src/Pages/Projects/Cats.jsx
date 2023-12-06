import { Arrow } from "../../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import { catFilter, catHome } from "../../assets/work/";

const Cats = () => {
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
              <h1 className="work-header">Cat Filter</h1>
              <p className="w-4/5 pl-6">
                I set out on a pet project—literally—where I built a website
                tailored to filter through various cat breeds. It was my
                playground for learning the ropes of API integration and
                handling the content it fetched. <br></br>
                <br></br>This hands-on journey allowed me to dive headfirst into
                the world of APIs, navigating through the data they returned and
                shaping it into an interactive platform.
              </p>
              <Link to="https://cat-breed-filter.netlify.app/" target="_blank">
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
                src={catFilter}
                alt="Screenshot of my blog page"
              />
            </div>
          </div>
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-24">
            {/* branding and UX*/}
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <img
                className="w-1/2 rounded"
                src={catHome}
                alt="a screenshot of the blog page"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cats;
