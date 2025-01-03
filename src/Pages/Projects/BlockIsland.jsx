import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import {
  BIFull, BIZoom,
  Lambda
} from "../../assets/work/";
import { Link } from "react-router-dom";
import { Arrow } from "../../components";

const BlockIsland = () => {
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
              <h1 className="work-header underline">Block Island LiDAR 3D Render</h1>
              <p className="w-4/5 pl-6">
              Sometimes, I watch a show called Expedition Unknown, where they often use LiDAR during their investigations. 
              Watching that sparked my curiosity: could I take freely available LiDAR data and render it myself? 
              To explore this, I visited NOAA&apos;s Digital Coast platform 
              and browsed their extensive dataset offerings. I wanted to start with something manageable, 
              so I chose a LiDAR scan of Block Island, which contained approximately 100 million data points.
                
                <br></br>
                <br></br>
                Through this project, I combined geospatial data analysis with modern web technologies to transform raw 
                LiDAR data into an interactive, accessible visualization. It was a 
                fascinating challenge to bring the data to life and learn about the possibilities of LiDAR in the process.
              </p>
              <Link
                to="https://github.com/katieperry4/block-island-frontend"
                target="_blank"
              >
                <button
                  className={`btn ${
                    dark
                      ? "bg-violet hover:bg-light-red"
                      : "bg-tea-green hover:bg-light-red"
                  }`}
                >
                  GitHub
                </button>
              </Link>
              <Link
                to="https://block-island.netlify.app/"
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
            <div className="self-center hidden sm:block">
              <img
                className="w-full"
                src={BIFull}
                alt="Screenshot of the 3D rendered visual of Block Island"
              />
            </div>
          </div>
          
          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">
            {/* branding and UX*/}
            <h3 className="work-subheader">Technologies</h3>
            {/* branding */}
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
              This project involved several technologies. I used Python for preprocessing the LiDAR data, 
                converting the original LAS format into JSON while reducing the dataset for more efficient handling. 
                AWS services were integral to the workflow—I stored the processed files in Amazon S3, built an AWS Lambda 
                function to serve the data through an API Gateway, and ensured scalability and low latency for data retrieval.
                <br></br>
                <br></br>
                
                On the frontend, I leveraged Three.js within a React application to render the LiDAR data as a 3D point cloud. 
                Using mouse controls, users can orbit, zoom, and explore the terrain interactively. 
                The visualization pipeline also 
                applied custom scaling and coloring to highlight elevation changes, creating a visually engaging experience.
              </p>
              <img
                className="w-1/3 rounded"
                src={Lambda}
                alt="LiDAR visualization of Block Island"
              />
            </div>


         
            <Link
              to="https://github.com/katieperry4/block-island-frontend"
              target="_blank"
            >
              <button
                className={`btn ${
                  dark
                    ? "bg-violet hover:bg-light-red"
                    : "bg-tea-green hover:bg-light-red"
                }`}
              >
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockIsland;