import { Link } from "react-router-dom";
import { BIZoom, cmsBlog, colors, memory, catFilter, TTTHome, AppViewCourse, AppViewCourseCropped, SCHAppointments, INProduct } from "../assets/work";
import ombros from "../assets/work/ombros.webp";
const Work = () => {
  return (
    <div id="work" className="m-6 md:m-32">
      <h2 className="section-h1">Work</h2>
      <div className="py-4">
        <p className="md:w-1/2">
          Welcome to my portfolio! Here, I showcase a blend of personal and
          professional projects that highlight my journey and passion for
          programming. 
        </p>
      </div>
      {/* React Projects */}
      <div className="py-12">
        {/* <h3 className="work-header">Projects</h3> */}
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-4">
        <li className="work-li card clickable">
            <Link
              className="clickable"
              to="/projects/blockisland"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full "
                src={BIZoom}
                alt="A screenshot of Block Island 3D Render"
              />
              <h3 className="text-2xl">Block Island LiDAR Render</h3>
              <h4>Python, AWS, JavaScript, React.js, Three.js</h4>
            </Link>
          </li>
        <li className="work-li card clickable">
            <Link
              className="clickable"
              to="/projects/teatimetracker"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full "
                src={TTTHome}
                alt="A screenshot of TeaTime Tracker Homepage"
              />
              <h3 className="text-2xl">Teatime Tracker</h3>
              <h4>C#, ASP.Net Core MVC, SQLServer, Azure</h4>
            </Link>
          </li>
        <li className="work-li card clickable">
            <Link
              className="clickable"
              to="/projects/termtracker"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full "
                src={AppViewCourseCropped}
                alt="A screenshot of the term tracker app course page"
              />
              <h3 className="text-2xl">Term Tracker Mobile App</h3>
              <h4>C#, .NET MAUI, SQLite</h4>
            </Link>
          </li>
        <li className="work-li card clickable">
            <Link
              className="clickable"
              to="/projects/appointments"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full "
                src={SCHAppointments}
                alt="Appointments page of the schedule app"
              />
              <h3 className="text-2xl">Appointment Scheduler</h3>
              <h4>C#, WinForms, MySQL</h4>
            </Link>
          </li>
        <li className="work-li card clickable">
            <Link
              className="clickable"
              to="/projects/inventory"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="rounded w-full "
                src={INProduct}
                alt="A screenshot of the inventory application edit product page"
              />
              <h3 className="text-2xl">Inventory Application</h3>
              <h4>C#, WinForms</h4>
            </Link>
          </li>
          <li className="work-li card clickable">
            <Link
              className="clickable"
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
                className="rounded w-full "
                src={ombros}
                alt="A screenshot of Ombros do Montejunto webpage"
              />
              <h3 className="text-2xl">Ombros do Montejunto</h3>
              <h4>HTML, CSS, JS, React</h4>
            </Link>
          </li>
          <li className="work-li card">
            <Link
              className="clickable"
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
              className="clickable"
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
              className="clickable"
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
              className="clickable"
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
