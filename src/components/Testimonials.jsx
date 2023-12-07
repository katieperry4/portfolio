import { useContext } from "react";
import { ThemeContext } from "../Context/theme";

const Testimonials = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section className="m-6 md:m-32">
      <div>
        <h2 className="underline section-h1">Testimonials</h2>
      </div>
      <div
        className={`md:mx-32 rounded p-4 mt-8 ${
          dark ? "bg-violet" : "bg-light-red"
        }`}
      >
        <blockquote className="flex flex-col items-center">
          <p className="w-1/2 italic text-lg">
            "We are really impressed with the speed and quality of Katie’s work.
            She listens carefully to the clients needs but also does her
            homework and is not afraid to come forward with suggestions of her
            own."
          </p>
          <cite className="p-2">-Ombros do Montejunto</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
