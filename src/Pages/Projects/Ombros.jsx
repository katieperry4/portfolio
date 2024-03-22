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
            <div className="w-3/5">
              <h1 className="work-header underline">Ombros do Montejunto</h1>
              <p className="w-4/5 pl-6">
                Ombros do Montejunto, a new winery situated just 40 minutes from
                Lisbon, is a passionate family endeavor. Taking charge of their
                digital footprint, I shaped their visual identity—crafting a
                distinctive logo, defining a vibrant color palette, and setting
                up their website. While it&apos;s currently a static site to
                introduce them, it&apos;s primed for an exciting transformation
                into an eCommerce hub. Alongside, I&apos;m deep into refining
                their label designs. <br></br>
                <br></br>
                Starting from the logo&apos;s inception, I seamlessly shifted
                gears into enhancing the user experience. I scoped out the
                digital landscape in Portugal, leveraging insights for an
                intuitive site structure. This ongoing project reflects a
                collaborative effort with the family, where design and content
                continually evolve for a polished final touch.
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
            <div className="items-center hidden sm:block">
              <img
                className="w-full opacity-70 hover:opacity-100"
                src={dark ? ombrosWhite : ombrosBlack}
                alt="Ombros do Montejunto Logo"
              />
            </div>
          </div>
          {/* testimonial */}
          <div
            className={`md:mx-32 rounded p-4 ${
              dark ? "bg-violet" : "bg-light-red"
            }`}
          >
            <blockquote className="flex flex-col items-center">
              <p className="w-1/2 italic text-lg">
                &quot;We are really impressed with the speed and quality of
                Katie&apos;s work. She listens carefully to the clients needs
                but also does her homework and is not afraid to come forward
                with suggestions of her own.&quot;
              </p>
              <cite>-Ombros do Montejunto</cite>
            </blockquote>
          </div>
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">
            {/* branding and UX*/}
            <h3 className="work-subheader">UX and Branding</h3>
            {/* branding */}
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                Crafting the brand identity for Ombros do Montejunto was a
                nuanced process that aimed to encapsulate the essence of family,
                heritage, and the stunning Montejunto mountain range. The logo
                design ingeniously weaves together the &apos;O&apos; of Ombros,
                the &apos;D&apos; of do, and the &apos;M&apos; for Montejunto as
                an abstract representation of the mountain range where their
                vineyards thrive.
                <br></br>
                <br></br>
                The color palette, predominantly greens and blues, echoes their
                core values—sincerity, luxury, quality, tangibility, and
                integrity. Each element meticulously harmonizes to convey their
                deep connection to nature and commitment to excellence.
              </p>
              <img
                className="w-1/3 rounded"
                src={ombrosBranding}
                alt="a screenshot of the branding page, showing logo options and color palettes"
              />
            </div>
            {/* information architecture  */}
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={ombrosIA}
                alt="information architecture for the site layout"
              />
              <p className="w-1/2 md:w-1/3">
                The architecture of the website was meticulously structured to
                offer an intuitive navigation experience. Strategically laying
                out information, every section was thoughtfully positioned to
                ensure easy access and seamless exploration. This deliberate
                arrangement empowers visitors to effortlessly find crucial
                details about the winery&apos;s heritage, offerings, and story,
                emphasizing clarity and user convenience.
              </p>
            </div>
            {/* wireframe */}
            <h3 className="work-subheader">Wireframe</h3>
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                Visualizing the website&apos;s layout commenced with crafting a
                wireframe, offering a sneak peek into the envisioned design. The
                homepage, a cornerstone of the online presence, was sketched to
                highlight the family&apos;s story, embracing a user-friendly
                layout. This wireframe serves as a blueprint, outlining the
                site&apos;s envisioned structure and functionality.
              </p>
              <img
                className="w-1/4 rounded"
                src={ombrosWire}
                alt="wireframe laying out the potential look of the site"
              />
            </div>
            {/* coded site */}
            <h3 className="work-subheader">Coded Site</h3>
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/4 rounded"
                src={ombrosHome}
                alt="the coded version of the site, albeit not 100% finished"
              />
              <p className="w-1/2 md:w-1/3">
                The culmination of design and development efforts resulted in
                the captivating final site. This dynamic digital space
                spotlights the family&apos;s narrative, inviting visitors into
                their world. A focal point is the incorporation of a mailing
                list, a blog, and an Instagram widget, fostering engagement and
                allowing enthusiasts to follow the winery&apos;s exciting
                journey. The homepage reflects a harmonious blend of aesthetics
                and functionality, encapsulating the essence of Ombros do
                Montejunto&apos;s evolving identity.
              </p>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default Ombros;
