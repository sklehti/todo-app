import lightModeIcon from "../../assets/images/icon-moon.svg";
import darkModeIcon from "../../assets/images/icon-sun.svg";

import "../header/Header.css";

const Navbar = () => {
  const handleScreenMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    root.classList.toggle("light");
  };
  return (
    <header className="flex justify-between flex-row mt-14 mb-6">
      <h1 className="text-4xl font-bold text-white md:text-6xl">TODO</h1>
      <button className="w-5 h-5 md:w-7 md:h-7" onClick={handleScreenMode}>
        <img
          src={lightModeIcon}
          alt="ligth mode icon"
          className="dark:hidden hover:moon-icon-style"
        />
        <img
          src={darkModeIcon}
          alt="dark mode icon"
          className="hidden dark:block hover:sun-icon-style"
        />
      </button>
    </header>
  );
};

export default Navbar;
