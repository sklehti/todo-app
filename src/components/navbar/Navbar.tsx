import lightModeIcon from "../../assets/images/icon-moon.svg";
import darkModeIcon from "../../assets/images/icon-sun.svg";

import "../navbar/Navbar.css";

const Navbar = () => {
  const handleScreenMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    root.classList.toggle("light");
  };
  return (
    <div className="flex justify-between flex-row mt-10 mb-6">
      <h1 className="text-2xl font-semibold text-white">TODO</h1>
      <button className="w-5 h-5" onClick={handleScreenMode}>
        <img
          src={lightModeIcon}
          alt="ligth mode icon"
          className="dark:hidden"
        />
        <img
          src={darkModeIcon}
          alt="dark mode icon"
          className=" hidden dark:block"
        />
      </button>
    </div>
  );
};

export default Navbar;
