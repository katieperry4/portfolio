import { Arrow } from "../../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import { cmsBlog, cmsContent } from "../../assets/work/";

const CMS = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <Arrow />
      <div className="flex ">
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
          <div className="flex flex-col items-center lg:flex-row py-20 md:mx-32 gap-6">
            {/* text */}
            <div className="w-full">
              <h1 className="work-header underline">CMS Blog</h1>
              <p className="w-full pl-6">
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
            <div className=" w-4/5 items-center justify-center hidden sm:flex">
              <img
                className="w-full opacity-70 rounded hover:opacity-100"
                src={cmsBlog}
                alt="A screenshot of my CMS blog"
              />
            </div>
          </div>

          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">
            {/* {/* contentful/} */}
            <h3 className="work-subheader">Contentful</h3>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                Managing my blog seamlessly became a reality through
                Contentful—a versatile content management system. By integrating
                Contentful with my site and leveraging Netlify webhooks, I
                streamlined the process of adding and updating blog posts. This
                dynamic connection ensures that whenever I make updates on
                Contentful, my site seamlessly reflects these changes,
                empowering a hassle-free and efficient workflow.
              </p>
              <img
                className="w-1/3 rounded"
                src={cmsContent}
                alt="the full page of my blog site"
              />
            </div>
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
        </div>
      </div>
    </>
  );
};

export default CMS;
