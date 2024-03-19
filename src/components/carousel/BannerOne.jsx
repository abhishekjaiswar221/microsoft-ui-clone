import BlueButton from "../ui/BlueButton";
import bannerImg from "../../assets/images/banner-img1.avif";

const BannerOne = () => {
  return (
    <div className="px-1">
      {/* CarouselBanner for sm-laptop(1024px) */}
      <div className="pb-5 md-mobile:pb-10 lg-mobile:pb-5 lg-tablet:pb-0 border border-[#e6e6e6] border-t-0 shadow-md lg-laptop:hidden">
        <div>
          <picture>
            <img
              className="object-cover w-screen sm-laptop:h-[520px]"
              src={bannerImg}
              alt="Banner 1"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 lg-tablet:gap-3 sm-laptop:gap-5">
          <div>
            <h1 className="text-2xl font-medium">Surface Pro 9</h1>
          </div>
          <div>
            <p>
              Tablet versatility and laptop power -- all in on single ultra -
              portable device.
            </p>
          </div>
          <div>
            <BlueButton btnText={"Lean more"} />
          </div>
        </div>
      </div>

      {/* CarouselBanner for lg-laptop(1399px) */}
      <div className="hidden lg-laptop:block">
        <div className="flex border border-t-0 border-[#e6e6e6]">
          <div className="w-[60%] h-[445px]  overflow-hidden">
            <picture>
              <img className="object-cover" src={bannerImg} alt="Banner 1" />
            </picture>
          </div>
          <div className="bg-[#f2f2f2]  w-[40%]">
            <div className="relative flex flex-col items-start justify-center gap-5 px-3 top-[140px] me-12">
              <div>
                <h1 className="text-4xl font-medium text-black">
                  Surface Pro 9
                </h1>
              </div>
              <div>
                <p className="text-base text-black">
                  Tablet versatility and laptop power -- all in on single ultra
                  - portable device.
                </p>
              </div>
              <div>
                <BlueButton btnText={"Lean more"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
