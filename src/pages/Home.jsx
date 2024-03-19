import Carousel from "../components/carousel/Carousel";
import HeaderNavigation from "../components/layout/HeaderNavigation";
// import GrayButton from "../components/ui/GrayButton";
import microsoftWindows from "../assets/svgs/microsoft-365.svg";
import xboxGameConsole from "../assets/svgs/xbox-game-consoles.svg";
import surfaceDevices from "../assets/svgs/surface-devices.svg";
import ProductCard from "../components/ui/ProductCard";
import surfaceLaptop5 from "../assets/images/surface-laptop-5.webp";
import surfaceStudio from "../assets/images/surface-laptop-studio.jpg";
import xboxSeriesX from "../assets/images/xbox-series-x.webp";
import microsoftLifeStyle from "../assets/images/microsoft365-lifestyle.avif";
import XboxSeriesS from "../components/ui/XboxSeriesS";

const Home = () => {
  const screenSize = window.matchMedia("width: 1399px");
  screenSize.addEventListener("change", () => {});
  return (
    <>
      <div id="header-nav">
        <HeaderNavigation />
      </div>
      <div id="carousel-banner">
        <Carousel />
      </div>
      <div id="product-links" className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8 w-60 mt-7 lg-mobile:w-fit">
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
      <div className="flex flex-wrap items-center justify-center gap-10 mt-8 lg-tablet:gap-6">
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

      <div>
        <XboxSeriesS />
      </div>
      {/* <GrayButton btnText="Back to top" /> */}
    </>
  );
};

export default Home;
