import Carousel from "../components/carousel/Carousel";
import HeaderNavigation from "../components/layout/HeaderNavigation";
import FooterNavigation from "../components/layout/FooterNavigation";
import { Facebook, Twitter, Youtube } from "lucide-react";
import XboxSeriesS from "../components/ui/XboxSeriesS";
import ProductCard from "../components/ui/ProductCard";
import GrayButton from "../components/ui/GrayButton";
import microsoftWindows from "../assets/svgs/microsoft-365.svg";
import xboxGameConsole from "../assets/svgs/xbox-game-consoles.svg";
import surfaceDevices from "../assets/svgs/surface-devices.svg";
import surfaceLaptop5 from "../assets/images/surface-laptop-5.webp";
import surfaceStudio from "../assets/images/surface-laptop-studio.jpg";
import xboxSeriesX from "../assets/images/xbox-series-x.webp";
import microsoftLifeStyle from "../assets/images/microsoft365-lifestyle.avif";
import surfaceBusiness from "../assets/images/surface-business.avif";
import microsoftTeams from "../assets/images/microsoft-teams.webp";
import windowsBusiness from "../assets/images/windows11-business.jpg";
import azureAi from "../assets/images/azure-ai.jpg";
import SearchBar from "../components/ui/SearchBar";

const Home = () => {
  const showSearchBar = () => {
    let hideNav = document.getElementById("header-nav");
    hideNav.className = "hidden";
    let showSearch = document.getElementById("search-bar");
    showSearch.className = "block";
  };

  const hideSearchBar = () => {
    let hideSearch = document.getElementById("search-bar");
    hideSearch.className = "hidden";
    let showNav = document.getElementById("header-nav");
    showNav.className = "block";
  };

  let mediaQuery = window.matchMedia("(min-width: 1024px)");
  const hideNavigation = () => {
    if (mediaQuery.matches) {
      let hideSearch = document.getElementById("search-bar");
      hideSearch.className = "hidden";
      let showNav = document.getElementById("header-nav");
      showNav.className = "block";
    }
  };
  mediaQuery.addEventListener("change", () => {
    hideNavigation();
  });

  return (
    <>
      {/* Header Navigation */}
      <div id="header-nav">
        <HeaderNavigation showSearch={showSearchBar} />
      </div>
      <div className="hidden" id="search-bar">
        <SearchBar hideSearch={hideSearchBar} />
      </div>
      {/* Header Navigation */}

      {/* Carousel Banner */}
      <div id="carousel-banner">
        <Carousel />
      </div>
      {/* Carousel Banner */}

      {/* Product Links */}
      <div
        id="product-links"
        className="flex items-center justify-center my-16"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 w-60 lg-mobile:w-fit">
          <div className="flex flex-col items-center justify-center gap-4">
            <picture>
              <img
                className="w-10 h-10"
                src={microsoftWindows}
                alt="Microsoft 365"
              />
            </picture>
            <div>
              <a
                className="text-[#0067b8] font-semibold text-base underline"
                href=""
              >
                Choose your Microsoft 365
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <picture>
              <img
                className="w-10 h-10"
                src={xboxGameConsole}
                alt="Xbox Game Console"
              />
            </picture>
            <div>
              <a
                className="text-[#0067b8] font-semibold text-base underline"
                href=""
              >
                Shop xbox games and consoles
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <picture>
              <img
                className="w-10 h-10"
                src={microsoftWindows}
                alt="Windows 11"
              />
            </picture>
            <div>
              <a
                className="text-[#0067b8] font-semibold text-base underline"
                href=""
              >
                Get Windows 11
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <picture>
              <img
                className="w-10 h-10"
                src={surfaceDevices}
                alt="Surface Devices"
              />
            </picture>
            <div>
              <a
                className="text-[#0067b8] font-semibold text-base underline"
                href=""
              >
                Explore Surface devices
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Product Links */}

      {/* Product Cards */}
      <div className="flex flex-wrap items-center justify-center gap-10 my-8 lg-tablet:gap-6">
        <div id="product-card1">
          <ProductCard
            imgSrc={surfaceLaptop5}
            heading={"Surface Laptop 5"}
            desc={
              "Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11."
            }
            btnText="Learn more"
          />
        </div>
        <div id="product-card2">
          <ProductCard
            imgSrc={surfaceStudio}
            heading={"Surface Laptop Studio"}
            desc={
              "Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11."
            }
            btnText="Learn more"
          />
        </div>
        <div id="product-card3">
          <ProductCard
            imgSrc={xboxSeriesX}
            heading={"Xbox Series X"}
            desc={"The fastest, most powerful Xbox ever."}
            btnText="Shop Xbox Series X"
          />
        </div>
        <div id="product-card4">
          <ProductCard
            imgSrc={microsoftLifeStyle}
            heading={"Maximise the everyday with Microsoft 365"}
            desc={
              "Get secure cloud storage and innovative apps – all in one plan."
            }
            btnText="For one Person"
          />
        </div>
      </div>
      {/* Product Cards */}

      {/* Xbox Card */}
      <div>
        <XboxSeriesS />
      </div>
      {/* Xbox Card */}

      {/* Business Product Cards */}
      <div>
        <h1 className="mx-2 mt-8 mb-5 text-2xl font-semibold lg-tablet:mx-5 sm-laptop:mx-8 lg-laptop:mx-[52px] md-mobile:mx-3">
          For business
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 lg-tablet:gap-6">
          <div id="product-card1">
            <ProductCard
              imgSrc={surfaceBusiness}
              heading={"Surface for Business"}
              desc={
                "No matter what you do, there’s a Surface to help you do it."
              }
              btnText="Shop now"
            />
          </div>
          <div id="product-card2">
            <ProductCard
              imgSrc={microsoftTeams}
              heading={"Get Microsoft Teams for free"}
              desc={
                "Online meetings, chat and shared cloud storage – all in one place."
              }
              btnText="Sign up for free"
            />
          </div>
          <div id="product-card3">
            <ProductCard
              imgSrc={windowsBusiness}
              heading={"Windows 11 for business"}
              desc={
                "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all."
              }
              btnText="Learn more"
            />
          </div>
          <div id="product-card4">
            <ProductCard
              imgSrc={azureAi}
              heading={"Join the era of AI"}
              desc={
                "Create, communicate, and code with the latest Microsoft AI solutions."
              }
              btnText="Explore AI Solutions"
            />
          </div>
        </div>
      </div>
      {/* Business Product Cards */}

      {/* Social Contacts */}
      <div className="mx-3 lg-mobile:mx-4 md-mobile:flex-row flex flex-col gap-3 lg-tablet:mx-6 sm-laptop:mx-9 lg-laptop:mx-[70px] mt-16 mb-10">
        <div>
          <p>Follow Microsoft</p>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <Facebook className="cursor-pointer" size={26} strokeWidth={2} />
          </div>
          <div>
            <Twitter className="cursor-pointer" size={26} strokeWidth={2} />
          </div>
          <div>
            <Youtube className="cursor-pointer" size={26} strokeWidth={2} />
          </div>
        </div>
      </div>
      {/* Social Contacts */}

      {/* Back to top button */}
      <div className="flex items-center justify-end mb-16 mx-3 lg-mobile:mx-4 lg-tablet:mx-6 sm-laptop:mx-9 lg-laptop:mx-[70px]">
        <GrayButton btnText="Back to top" />
      </div>
      {/* Back to top button */}

      {/* Footer Navigation */}
      <div>
        <FooterNavigation />
      </div>
      {/* Footer Navigation */}
    </>
  );
};

export default Home;
