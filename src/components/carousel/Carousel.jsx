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
  const [control, setControl] = useState(false);
  const carouselControl = () => {
    setControl(!control);
  };
  return (
    <>
      <div className="slide">
        <BannerTwo />
      </div>
      {/* <div className="slide">
        <BannerOne />
      </div> */}
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
          <ChevronLeft className="btn-prev" size={24} strokeWidth={1.5} />
        </div>
        <div>
          <Circle size={10} strokeWidth={3} />
        </div>
        <div>
          <Circle size={10} strokeWidth={3} />
        </div>
        <div>
          <ChevronRight className="btn-next" size={24} strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};
export default Carousel;
