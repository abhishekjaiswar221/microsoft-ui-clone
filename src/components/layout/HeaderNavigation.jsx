import { useState } from "react";
import {
  Search,
  Menu,
  ShoppingCart,
  CircleUserRound,
  X,
  ChevronDown,
} from "lucide-react";
// import { NavLink } from "react-router-dom";
import microsoftLogo from "../../assets/images/microsoft-logo.png";

const HeaderNavigation = () => {
  const [menuBar, setMenuBar] = useState(false);
  // console.log(menuBar);
  const toggleMenu = () => {
    setMenuBar(!menuBar); //Toggle the value of menuBar variable-->If true then ~false or true if false  then ~true
    // console.log(menuBar);
  };
  return (
    <>
      {/* Navigation for mobile */}
      <div>
        <header>
          <nav className="flex items-center border-b border-[#e6e6e6] justify-around w-full h-12 bg-white ">
            <div onClick={toggleMenu}>
              {menuBar ? ( //condition
                <X size={20} strokeWidth={1.5} /> //true-->clicked
              ) : (
                <Menu size={20} strokeWidth={1.5} /> //false-->not clicked
              )}
            </div>
            <div>
              <Search size={20} strokeWidth={1.5} />
            </div>
            <div>
              <img
                className="h-[23px]"
                src={microsoftLogo}
                alt="Microsoft Logo"
              />
            </div>
            <div>
              <ShoppingCart size={20} strokeWidth={1.5} />
            </div>
            <div>
              <CircleUserRound size={30} strokeWidth={1} />
            </div>
          </nav>

          {menuBar && (
            <nav className="bg-[#f2f2f2] border-b border-black">
              <ul className="flex flex-col">
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/microsoft"}>Microsoft 365</NavLink> */}
                  Microsoft 365
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/teams"}>Teams</NavLink> */}Teams
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/copilot"}>Copilot</NavLink> */}Copilot
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/windows"}>Windows</NavLink> */}Windows
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/surface"}>Surface</NavLink> */}Surface
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/xbox"}>X Box</NavLink> */}X Box
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/software"}>Software</NavLink> */}Software
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/pcdevices"}>PCs and Devices</NavLink> */}
                  PCs and Devices
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/entertainment"}>Entertainment</NavLink> */}
                  Entertainment
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/business"}>Business</NavLink> */}
                  Business
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/developer"}>Developer & IT</NavLink> */}
                  Developer & IT
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/other"}>Other</NavLink> */}Other
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/sitemap"}>View Sitemap</NavLink> */}View
                  Sitemap
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>

      {/* Navigation for desktop */}
    </>
  );
};
export default HeaderNavigation;
