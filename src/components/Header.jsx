import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/roster">
            Roster
          </Link>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
