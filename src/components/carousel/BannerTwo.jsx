import BlueButton from "../ui/BlueButton";
import bannerImg2 from "../../assets/images/banner-img2.png";

const BannerTwo = () => {
  return (
    <div className="px-1">
      {/* CarouselBanner for sm-laptop(1024px) */}
      <div className="pb-5 md-mobile:pb-10 lg-mobile:pb-5 lg-tablet:pb-0 border border-t-0 border-[#e6e6e6] shadow-md block lg-laptop:hidden">
        <div>
          <picture>
            <img
              className="object-cover w-screen sm-laptop:h-[520px]"
              src={bannerImg2}
              alt="Banner 2"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 lg-tablet:gap-3 sm-laptop:gap-5">
          <div>
            <h1 className="text-2xl font-medium">
              Unlock your potential with Microsoft Office 365
            </h1>
          </div>
          <div>
            <p>
              Get things done faster and unleash your creativity with the power
              of AI in Microsoft 365 any where you go.
            </p>
          </div>
          <div>
            <BlueButton btnText={"Get Microsoft Office 365 now"} />
          </div>
        </div>
      </div>

      {/* CarouselBanner for lg-laptop(1399px) */}
      <div className="hidden lg-laptop:block">
        <div className="flex border border-t-0 border-[#e6e6e6]">
          <div className="bg-[#c4e0fa]  w-[40%]">
            <div className="relative flex flex-col items-start justify-center gap-5 px-3 top-[140px] ms-12">
              <div>
                <h1 className="text-4xl font-medium text-black">
                  Unlock your potential with Microsoft Office 365
                </h1>
              </div>
              <div>
                <p className="text-base text-black">
                  Get things done faster and unleash your creativity with the
                  power of AI in Microsoft 365 any where you go.
                </p>
              </div>
              <div>
                <BlueButton btnText={"Get Microsoft Office 365 now"} />
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[445px]  overflow-hidden">
            <picture>
              <img className="object-cover" src={bannerImg2} alt="Banner 1" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
