import { useState } from "react";
// import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
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

  const nextSlide = () => {};

  const prevSide = () => {};

  const [control, setControl] = useState(false);
  const carouselControl = () => {
    setControl(!control);
  };
  return (
    <>
      {/* <BannerOne /> */}
      <BannerTwo />
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
