const Arrow = () => {
  const upButton = document.getElementById("upButton");
  window.onscroll = function () {
    scrollFunction();
  };
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
  const upFunction = () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      id="upButton"
      onClick={() => upFunction()}
      className="px-4 pt-2 text-4xl bg-light-red"
    >
      ^
    </button>
  );
};

export default Arrow;
