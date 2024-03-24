import { useState } from "react";
import PropTypes from "prop-types";
import {
  Search,
  Menu,
  ShoppingCart,
  CircleUserRound,
  X,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import microsoftLogo from "../../assets/images/microsoft-logo.png";

const HeaderNavigation = ({ showSearch }) => {
  const [menuBar, setMenuBar] = useState(false);

  const toggleMenu = () => {
    setMenuBar(!menuBar); // Toggle the value of menuBar[State]-->If true then ~true-->false if false  then ~false-->true
  };

  return (
    <>
      {/* Navigation for mobile */}
      <div className="block sm-laptop:hidden">
        <header>
          <nav className="flex items-center border-b border-[#e6e6e6] justify-around lg-tablet:justify-between lg-tablet:px-5 w-full h-14 bg-white">
            <div className="flex items-center justify-center gap-5">
              <div onClick={toggleMenu}>
                {/* Ternary Operator-->Condition ? True : False */}
                {menuBar ? ( //condition
                  <X size={18} strokeWidth={1.5} /> //true-->clicked
                ) : (
                  <Menu size={18} strokeWidth={1.5} /> //false-->not clicked
                )}
              </div>
              <div>
                <Search onClick={showSearch} size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <picture>
                <img
                  className="h-[23px]"
                  src={microsoftLogo}
                  alt="Microsoft Logo"
                />
              </picture>
            </div>
            <div className="flex items-center justify-center gap-5">
              <div>
                <ShoppingCart size={18} strokeWidth={1.5} />
              </div>
              <div>
                <CircleUserRound size={30} strokeWidth={1} />
              </div>
            </div>
          </nav>

          {/* Conditional Rendering using logical AND(&&)-->If menBar[State] in true then render the below code and if it's false then don't render */}
          {menuBar && (
            <div className="absolute w-full top-12">
              <nav className="bg-[#f2f2f2] border-b border-black">
                <ul className="flex flex-col">
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/microsoft"}
                    >
                      Microsoft 365
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/teams"}
                    >
                      Teams
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/copilot"}
                    >
                      Copilot
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/windows"}
                    >
                      Windows
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/surface"}
                    >
                      Surface
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/xbox"}
                    >
                      Xbox
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/support"}
                    >
                      Support
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                    <div>
                      <NavLink
                        className="text-sm hover:underline hover:decoration-2"
                        to={"/software"}
                      >
                        Software
                      </NavLink>
                    </div>
                    <div>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                    <div>
                      <NavLink
                        className="text-sm hover:underline hover:decoration-2"
                        to={"/pcdevices"}
                      >
                        PCs and Devices
                      </NavLink>
                    </div>
                    <div>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                    <div>
                      <NavLink
                        className="text-sm hover:underline hover:decoration-2"
                        to={"/entertainment"}
                      >
                        Entertainment
                      </NavLink>
                    </div>
                    <div>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                    <div>
                      <NavLink
                        className="text-sm hover:underline hover:decoration-2"
                        to={"/business"}
                      >
                        Business
                      </NavLink>
                    </div>
                    <div>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                    <div>
                      <NavLink
                        className="text-sm hover:underline hover:decoration-2"
                        to={"/developer"}
                      >
                        Developer & IT
                      </NavLink>
                    </div>
                    <div>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full px-5 border-b border-[#e6e6e6] h-14">
                    <div>
                      <NavLink
                        className="text-sm hover:underline hover:decoration-2"
                        to={"/other"}
                      >
                        Other
                      </NavLink>
                    </div>
                    <div>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                  </li>
                  <li className="flex items-center justify-start w-full px-5 border-b border-[#e6e6e6] h-14">
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/sitemap"}
                    >
                      View Sitemap
                    </NavLink>
                    View
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Navigation for desktop */}
      <div className="hidden sm-laptop:block">
        <header>
          <nav className="flex items-center justify-between px-10 lg-laptop:px-20 h-14 border-b border-[#e6e6e6]">
            <div className="flex gap-8 lg-laptop:gap-10">
              <div>
                <picture>
                  <img
                    className="h-[23px]"
                    src={microsoftLogo}
                    alt="Microsoft Logo"
                  />
                </picture>
              </div>
              <div>
                <ul className="flex items-center justify-around gap-5">
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/microsoft"}
                    >
                      Microsoft 365
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/teams"}
                    >
                      Teams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/copilot"}
                    >
                      Copilot
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/windows"}
                    >
                      Windows
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/surface"}
                    >
                      Surface
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/xbox"}
                    >
                      Xbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-sm hover:underline hover:decoration-2"
                      to={"/support"}
                    >
                      Support
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-1">
                <div>
                  <p className="text-sm hover:underline hover:decoration-2">
                    All Microsoft
                  </p>
                </div>
                <div>
                  <ChevronDown size={18} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 lg-laptop:gap-2">
                <div className="hidden lg-laptop:block">
                  <p className="text-sm hover:underline hover:decoration-2">
                    Search
                  </p>
                </div>
                <div>
                  <Search size={18} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="hidden lg-laptop:block">
                  <p className="text-sm hover:underline hover:decoration-2">
                    Cart
                  </p>
                </div>
                <div>
                  <ShoppingCart size={18} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="hidden lg-laptop:block">
                  <p className="text-sm hover:underline hover:decoration-2">
                    Sign in
                  </p>
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
HeaderNavigation.propTypes = {
  showSearch: PropTypes.func.isRequired,
};
export default HeaderNavigation;
