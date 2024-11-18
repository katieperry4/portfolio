import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import {
  ombrosHome,
  ombrosBranding,
  ombrosIA,
  ombrosWire,
  ombrosBlack,
  ombrosWhite,
  INHome,
  INPart,
  INProduct,
} from "../../assets/work/";
import { Link } from "react-router-dom";
import { Arrow } from "../../components";

const Inventory = () => {
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
              <h1 className="work-header underline">Inventory Application</h1>
              <p className="w-full pl-6">
              This straightforward WinForms application simplifies inventory management with intuitive tools for adding, editing, and deleting parts and products. 
              Each product can have associated parts, fostering efficient organization. 
              The app enforces data integrity by preventing the deletion of parts linked to products. 
              <br></br>
              <br></br>
              Parts can be categorized as in-house or outsourced, making it easy to manage and track inventory sources. 
              While it currently uses in-memory storage, this app serves as a robust foundation for efficient inventory control.
              </p>
              <Link
                to="https://github.com/katieperry4/Inventory"
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
            <div className="items-center hidden sm:block">
              <img
                className="w-full"
                src={INHome}
                alt="Homepage of inventory application"
              />
            </div>
          </div>

          {/* pictures */}
          <div className="flex flex-col items-center justify-center py-12 gap-12 md:gap-24">
    
            <h3 className="work-subheader">Main Pages</h3>
      
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                This is the home page of the inventory application. 
                From here the user can add/edit/delete parts and products.
              </p>
              <img
                className="w-1/3 rounded"
                src={INHome}
                alt="a screenshot of the home page of the inventory application"
              />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <img
                className="w-1/3 rounded"
                src={INPart}
                alt="parts page of the inventory application"
              />
              <p className="w-1/2 md:w-1/3">
                Here is the parts page, where users can add and edit parts.
                Each part can be either in-house or outsourced.
                Parts that are associated with a product cannot be deleted.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 justify-center">
              <p className="w-1/2 md:w-1/3">
                This is the product page. From here the user can create and edit product info and associate parts with it.
              </p>
              <img
                className="w-1/3 rounded"
                src={INProduct}
                alt="a screenshot of the product page of the inventory application  "
              />
            </div>
           
            <Link
              to="https://github.com/katieperry4/Inventory"
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

export default Inventory;