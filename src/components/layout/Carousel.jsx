import { useState } from "react";
// import CarouselBanner1 from "../layout/CarouselBanner1";
import CarouselBanner2 from "../layout/CarouselBanner2";
import carouselImage from "../../assets/images/banner-img.png";
import {
  CirclePause,
  ChevronLeft,
  ChevronRight,
  Circle,
  CirclePlay,
} from "lucide-react";

const Carousel = () => {
  //   const changeCard = () => {
  //     console.log("hello");
  //     setInterval(() => {}, 1000);
  //   };
  //   const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    // setActiveIndex(1);
  };

  const prevSide = () => {
    // setActiveIndex(1);
  };

  const [control, setControl] = useState(false);
  const carouselControl = () => {
    setControl(!control);
  };
  return (
    <>
      {/* https://blogs.windows.com/wp-content/uploads/prod/sites/43/2022/10/Pro-9-Colors1920-1600x900.jpg */}
      {/* <CarouselBanner1
        imgSrc={
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540"
        }
        heading={"Surface Pro 9"}
        desc={
          "Tablet versatility and laptop power -- all in on single ultra - portable device."
        }
      /> */}
      <CarouselBanner2
        imgSrc={carouselImage}
        heading={"Unlock your potential with Microsoft Office 365"}
        desc={
          "Get things done faster and unleash your creativity with the power of AI in Microsoft 365 any where you go."
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
          <ChevronLeft onClick={prevSide} size={24} strokeWidth={1.5} />
        </div>
        <div>
          <Circle size={10} strokeWidth={3} />
        </div>
        <div>
          <Circle size={10} strokeWidth={3} />
        </div>
        <div>
          <ChevronRight onClick={nextSlide} size={24} strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};
export default Carousel;
