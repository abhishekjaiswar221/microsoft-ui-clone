import { Search, Menu, ShoppingCart, CircleUserRound } from "lucide-react";
// import { NavLink } from "react-router-dom";
import Logo from "src/assets/images/microsoft-logo.png"; //Error

const HeaderNavigation = () => {
  return (
    <>
      {/* Navigation for mobile */}
      <div className="">
        <header>
          <nav className="flex items-center justify-between h-12 bg-white border-b border-black">
            <div>
              <Menu />
            </div>
            {/* <ul>
              <li>
                <NavLink to={"/microsoft"}>Microsoft 365</NavLink>
              </li>
              <li>
                <NavLink to={"/teams"}>Teams</NavLink>
              </li>
              <li>
                <NavLink to={"/copilot"}>Copilot</NavLink>
              </li>
              <li>
                <NavLink to={"/windows"}>Windows</NavLink>
              </li>
              <li>
                <NavLink to={"/surface"}>Surface</NavLink>
              </li>
              <li>
                <NavLink to={"/xbox"}>X Box</NavLink>
              </li>
              <li>
                <NavLink to={"/software"}>Software</NavLink>
              </li>
              <li>
                <NavLink to={"/pcdevices"}>PCs and Devices</NavLink>
              </li>
              <li>
                <NavLink to={"/entertainment"}>Entertainment</NavLink>
              </li>
              <li>
                <NavLink to={"/business"}>Business</NavLink>
              </li>
              <li>
                <NavLink to={"/developer"}>Developer & IT</NavLink>
              </li>
              <li>
                <NavLink to={"/other"}>Other</NavLink>
              </li>
              <li>
                <NavLink to={"/sitemap"}>View Sitemap</NavLink>
              </li>
            </ul> */}
            <div>
              <Search />
            </div>
            <div>{Logo}</div>
            <div>
              <ShoppingCart />
            </div>
            <div>
              <CircleUserRound />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
export default HeaderNavigation;
