import Carousel from "../components/layout/Carousel";
import HeaderNavigation from "../components/layout/HeaderNavigation";
// import GrayButton from "../components/ui/GrayButton";

const Home = () => {
  return (
    <>
      <div>
        <HeaderNavigation />
      </div>
      <div>
        <Carousel />
      </div>
      {/* <GrayButton btnText="Back to top" /> */}
    </>
  );
};

export default Home;
