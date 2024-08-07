import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import rancourMainLogo from "../assets/rancourLogo.png";
import LoginBtn from "../components/LoginBtn";

const Header = () => {
  return (
    <>
      <header>
        <div className="mainLogoContainer">
          <img src={rancourMainLogo} alt="" />
        </div>
        <nav>
          <NavLink className="navItemLink" to="/">
            Home
          </NavLink>
          <NavLink className="navItemLink" to="/roster">
            Roster
          </NavLink>
          <NavLink className="navItemLink" to="/apply">
            Apply!
          </NavLink>
          <LoginBtn />
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
