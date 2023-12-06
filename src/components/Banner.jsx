import { useContext } from "react";
import keyboard from "../assets/keyboard.svg";
import keyboardLight from "../assets/keyboard-light.svg";
import { ThemeContext } from "../Context/theme";

const Banner = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      id="home"
      className={`flex flex-col md:flex-row items-center justify-center py-16 ${
        dark ? "bg-sea-image" : "bg-water-color"
      } `}
    >
      <div>
        <img
          className="h-128 "
          src={dark ? keyboard : keyboardLight}
          alt="a section of 3d keyboard"
        />
      </div>
      <div>
        <h1 className="banner-h1">Katie Perry</h1>
        <h3 className="banner-h3">Frontend Web Developer</h3>
      </div>
    </div>
  );
};

export default Banner;
