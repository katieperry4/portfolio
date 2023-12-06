import { Arrow } from "../../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import { cmsBlog, cmsHome } from "../../assets/work/";

const CMS = () => {
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
              <h1 className="work-header">CMS Blog</h1>
              <p className="w-4/5 pl-6">
                I embarked on a petite yet meaningful project—a hands-on journey
                diving into content management systems. It was my personal
                playground, a space where I rolled up my sleeves and tinkered
                around to grasp the ins and outs of these systems. <br></br>
                <br></br>This hands-on experience allowed me to experiment,
                explore, and get cozy with the tools, letting me flex my
                creative muscles while navigating through the intricacies of
                managing content effectively.
              </p>
              <Link
                to="https://katie-practice-cms-blog.netlify.app/"
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
                src={cmsBlog}
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
                src={cmsHome}
                alt="a screenshot of the blog page"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CMS;
