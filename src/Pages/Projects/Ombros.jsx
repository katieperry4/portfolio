import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import {
  ombrosHome,
  ombrosBranding,
  ombrosIA,
  ombrosWire,
  ombrosBlack,
  ombrosWhite,
} from "../../assets/work/";
import { Link } from "react-router-dom";
import { Arrow } from "../../components";

const Ombros = () => {
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
          <div className="flex flex-col md:flex-row py-20 px-6">
            {/* text */}
            <div className="w-3/5">
              <h1 className="work-header">Ombros do Montejunto</h1>
              <p className="w-3/5 pl-6">
                Ombros do Montejunto, a new winery situated just 40 minutes from
                Lisbon, is a passionate family endeavor. Taking charge of their
                digital footprint, I shaped their visual identity—crafting a
                distinctive logo, defining a vibrant color palette, and setting
                up their website. While it's currently a static site to
                introduce them, it's primed for an exciting transformation into
                an eCommerce hub. Alongside, I'm deep into refining their label
                designs. <br></br>
                <br></br>
                Starting from the logo's inception, I seamlessly shifted gears
                into enhancing the user experience. I scoped out the digital
                landscape in Portugal, leveraging insights for an intuitive site
                structure. This ongoing project reflects a collaborative effort
                with the family, where design and content continually evolve for
                a polished final touch.
              </p>
              <Link
                to="https://dapper-brigadeiros-9bb1c4.netlify.app/"
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
            <div className="flex items-center">
              <img
                className="w-full opacity-70 hover:opacity-100"
                src={dark ? ombrosWhite : ombrosBlack}
                alt="Ombros do Montejunto Logo"
              />
            </div>
          </div>
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-24">
            {/* branding and UX*/}
            <h3 className="work-subheader">UX and Branding</h3>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <img
                className="w-1/2 rounded"
                src={ombrosBranding}
                alt="a screenshot of the branding page, showing logo options and color palettes"
              />
              <img
                className="w-1/2 rounded"
                src={ombrosIA}
                alt="information architecture for the site layout"
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <h3 className="work-subheader">Wireframe</h3>
              <img
                className="w-3/5 rounded"
                src={ombrosWire}
                alt="wireframe laying out the potential look of the site"
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <h3 className="work-subheader">Coded Site</h3>
              <img
                className="w-3/5 rounded"
                src={ombrosHome}
                alt="the coded version of the site, albeit not 100% finished"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ombros;
