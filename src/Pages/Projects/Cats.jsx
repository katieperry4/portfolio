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
      <div className="flex">
        {/* sidebar */}
        <div className="fixed hidden md:block">
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
        <div className="md:mx-12">
          <div className="flex flex-col items-center lg:flex-row py-20 md:mx-32">
            {/* text */}
            <div className="w-full">
              <h1 className="work-header underline">Cat Filter</h1>
              <p className="w-full pl-6">
                I set out on a pet project—literally—where I built a website
                tailored to filter through various cat breeds. It was my
                playground for learning the ropes of API integration and
                handling the content it fetched. <br></br>
                <br></br>This hands-on journey allowed me to dive headfirst into
                the world of APIs, navigating through the data they returned and
                shaping it into an interactive platform.
              </p>
              <Link
                to="https://cat-breed-filter.netlify.app/
"
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
            <div className="w-4/5 items-center hidden sm:block">
              <img
                className="w-full opacity-70 rounded hover:opacity-100"
                src={catFilter}
                alt="A screenshot of my CMS blog"
              />
            </div>
          </div>

          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">
            {/* branding and UX*/}
            <h3 className="work-subheader">API</h3>
            {/* branding */}
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                Engaging with a particular API dedicated to cat breeds became a
                focal point in my journey of understanding data retrieval and
                API utilization. This specific API offered invaluable insights
                into fetching detailed information about diverse cat breeds,
                serving as a practical platform for learning the intricacies of
                API integration.
                <br></br>
                <br></br>
                Through this hands-on experience, I navigated the complexities
                of data acquisition and utilization, illuminating the vast
                potential of API-driven development.
              </p>
              <img
                className="w-1/3 rounded"
                src={catHome}
                alt="a screenshot of the branding page, showing logo options and color palettes"
              />
            </div>
            <Link
              to="https://cat-breed-filter.netlify.app/
"
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
        </div>
      </div>
    </>
  );
};

export default Cats;
