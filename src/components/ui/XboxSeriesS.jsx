import BlueButton from "./BlueButton";
import xboxSeriesS from "../../assets/images/xbox-series-s.jpg";

const XboxSeriesS = () => {
  return (
    <>
      <div className="block lg-laptop:hidden">
        <div id="xbox-series" className="flex flex-col mx-2">
          <div>
            <picture>
              <img className="w-full" src={xboxSeriesS} alt="Xbox Series S" />
            </picture>
          </div>
          <div className="flex flex-col gap-4 p-6 sm-laptop:border sm-laptop:border-[#e6e6e6] sm-laptop:shadow-md">
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Xbox Series S</h1>
              <p>Next-gen performance in the smallest x-box ever</p>
            </div>
            <div>
              <BlueButton btnText="Shop Xbox Series S" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg-laptop:block">
        <div className="flex items-center justify-center">
          <div className="flex flex-row items-center justify-center mx-8 my-8">
            <div className="bg-[#e6e6e6]  w-[40%] h-[450px] flex items-center justify-center">
              <div className="mx-12 space-y-5 ">
                <div className="space-y-5">
                  <h1 className="text-4xl font-medium text-black">
                    Xbox Series S
                  </h1>
                  <p className="text-base text-black">
                    Next-gen performance in the smallest x-box ever
                  </p>
                </div>
                <div>
                  <BlueButton btnText="Shop Xbox Series S" />
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[450px]  overflow-hidden">
              <picture>
                <img
                  className="object-cover"
                  src={xboxSeriesS}
                  alt="Xbox Series S"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default XboxSeriesS;
