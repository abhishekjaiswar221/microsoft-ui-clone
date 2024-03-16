import CarouselCard from "../components/layout/CarouselCard";
import HeaderNavigation from "../components/layout/HeaderNavigation";
// import Button from "./components/ui/Button";
import { CirclePause, ChevronLeft, ChevronRight, Circle } from "lucide-react";

const Home = () => {
  //   const changeCard = () => {
  //     console.log("hello");
  //     setInterval(() => {}, 1000);
  //   };
  return (
    <>
      <HeaderNavigation />
      <CarouselCard
        imgSrc={
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540"
        }
        heading={"Surface Pro 9"}
        desc={
          "Tablet versatility and laptop power -- all in on single ultra - portable device"
        }
      />
      <div className="flex flex-row items-center justify-center gap-5 h-14">
        <div>
          <CirclePause size={24} strokeWidth={1.5} />
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
    </>
  );
};

export default Home;
