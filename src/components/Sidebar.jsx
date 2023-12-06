const Menu = () => {
  return (
    <div className="md:hidden h-screen mt-32">
      <ul className="flex flex-col">
        <a href="#home" className="nav-li">
          Home
        </a>
        <a href="#about" className="nav-li">
          About
        </a>
        <a href="#work" className="nav-li">
          Work
        </a>
        <a href="#contact" className="nav-li">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Menu;
