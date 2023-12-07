import { useEffect } from "react";
const Arrow = () => {
  useEffect(() => {
    const upButton = document.getElementById("upButton");
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        upButton.style.display = "block";
      } else {
        upButton.style.display = "none";
      }
    };

    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      window.onscroll = null; // Cleanup when component unmounts
    };
  }, []); // Empty dependency array means this runs once after initial render

  const upFunction = () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      id="upButton"
      onClick={() => upFunction()}
      className="px-4 pt-2 text-4xl bg-light-red z-10"
    >
      ^
    </button>
  );
};

export default Arrow;
