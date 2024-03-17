import { useState } from "react";
import HeaderNavigation from "../components/layout/HeaderNavigation";
// import CarouselBanner from "../components/layout/CarouselBanner";
import CarouselBanner2 from "../components/layout/CarouselBanner2";
import CarouselImage from "../assets/images/bannerimg.png";
import {
  CirclePause,
  ChevronLeft,
  ChevronRight,
  Circle,
  CirclePlay,
} from "lucide-react";
// import GrayButton from "../components/ui/GrayButton";

const Home = () => {
  //   const changeCard = () => {
  //     console.log("hello");
  //     setInterval(() => {}, 1000);
  //   };
  const [control, setControl] = useState(false);
  const carouselControl = () => {
    setControl(!control);
  };
  return (
    <>
      <HeaderNavigation />
      {/* <CarouselBanner
        imgSrc={
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540"
        }
        heading={"Surface Pro 9"}
        desc={
          "Tablet versatility and laptop power -- all in on single ultra - portable device."
        }
      /> */}
      <CarouselBanner2
        imgSrc={CarouselImage}
        heading={"Unlock your potential with Microsoft Copilot"}
        desc={
          "Get things done faster and unleash your creativity with the power of AI any where you go."
        }
      />
      <div className="flex flex-row items-center justify-center gap-6 h-14">
        <div>
          {control ? (
            <CirclePlay onClick={carouselControl} size={24} strokeWidth={1.5} />
          ) : (
            <CirclePause
              onClick={carouselControl}
              size={24}
              strokeWidth={1.5}
            />
          )}
        </div>
        <div>
          <ChevronLeft size={24} strokeWidth={1.5} />
        </div>
        <div>
          <Circle size={10} strokeWidth={3} />
        </div>
        <div>
          <Circle size={10} strokeWidth={3} />
        </div>
        <div>
          <ChevronRight size={24} strokeWidth={1.5} />
        </div>
      </div>
      {/* <GrayButton btnText="Back to top" /> */}
    </>
  );
};

export default Home;
