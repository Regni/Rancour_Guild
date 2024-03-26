import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import rancourMainLogo from "../assets/rancourLogo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="mainLogoContainer">
          <img src={rancourMainLogo} alt="" />
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/roster">Roster</NavLink>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
