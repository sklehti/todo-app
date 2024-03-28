import React from "react";
import lightModeIcon from "../../assets/images/icon-moon.svg";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between flex-row mt-10 mb-6">
      <h1 className="text-2xl font-semibold text-white">TODO</h1>
      <button>
        <img src={lightModeIcon} alt="ligth mode icon" />
      </button>
    </div>
  );
};

export default Navbar;
