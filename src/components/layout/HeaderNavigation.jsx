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

  const toggleMenu = () => {
    setMenuBar(!menuBar); // Toggle the value of menuBar[State]-->If true then ~true-->false if false  then ~false-->true
  };

  return (
    <>
      {/* Navigation for mobile */}
      <div className="block full-laptop:hidden">
        <header>
          <nav className="flex items-center border-b border-[#e6e6e6] justify-around full-tablet:justify-between full-tablet:px-5 w-full h-12 bg-white ">
            <div className="flex items-center justify-center gap-5">
              <div onClick={toggleMenu}>
                {/* Ternary Operator-->Condition ? True : False */}
                {menuBar ? ( //condition
                  <X size={20} strokeWidth={1.5} /> //true-->clicked
                ) : (
                  <Menu size={20} strokeWidth={1.5} /> //false-->not clicked
                )}
              </div>
              <div>
                <Search size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <img
                className="h-[23px]"
                src={microsoftLogo}
                alt="Microsoft Logo"
              />
            </div>
            <div className="flex items-center justify-center gap-5">
              <div>
                <ShoppingCart size={20} strokeWidth={1.5} />
              </div>
              <div>
                <CircleUserRound size={30} strokeWidth={1} />
              </div>
            </div>
          </nav>

          {/* Conditional Rendering-->If menBar[State] in true then render the below code and if it's false then don't render */}
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
                  {/* <NavLink to={"/xbox"}>X Box</NavLink> */}Xbox
                </li>
                <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/support"}>Support</NavLink> */}Support
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/software"}>Software</NavLink> */}Software
                  <ChevronDown size={20} strokeWidth={1.5} />
                </li>
                <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                  {/* <NavLink to={"/pcdevices"}>PCs and Devices</NavLink> */}
                  PCs & Devices
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
      <div className="hidden full-laptop:block">
        <header>
          <nav className="flex items-center justify-around h-14 border-b border-[#e6e6e6]">
            <div>
              <img
                className="h-[23px]"
                src={microsoftLogo}
                alt="Microsoft Logo"
              />
            </div>
            <div>
              <ul className="flex items-center justify-around gap-5">
                <li>
                  {/* <NavLink to={"/microsoft"}>Microsoft 365</NavLink> */}
                  Microsoft 365
                </li>
                <li>{/* <NavLink to={"/teams"}>Teams</NavLink> */}Teams</li>
                <li>
                  {/* <NavLink to={"/copilot"}>Copilot</NavLink> */}Copilot
                </li>
                <li>
                  {/* <NavLink to={"/windows"}>Windows</NavLink> */}Windows
                </li>
                <li>
                  {/* <NavLink to={"/surface"}>Surface</NavLink> */}Surface
                </li>
                <li>{/* <NavLink to={"/xbox"}>X Box</NavLink> */}Xbox</li>
                <li>
                  {/* <NavLink to={"/support"}>Support</NavLink> */}Support
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-1">
                <div>
                  <p>All Microsoft</p>
                </div>
                <div>
                  <ChevronDown size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="hidden lg-laptop:block">
                  <p>Search</p>
                </div>
                <div>
                  <Search size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="hidden lg-laptop:block">
                  <p>Cart</p>
                </div>
                <div>
                  <ShoppingCart size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="hidden lg-laptop:block">
                  <p>Sign in</p>
                </div>
                <div>
                  <CircleUserRound size={30} strokeWidth={1} />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
export default HeaderNavigation;
