import PropTypes from "prop-types";
import BlueButton from "../ui/BlueButton";

const BannerOne = ({ imgSrc, heading, desc }) => {
  return (
    <div className="px-1">
      {/* CarouselBanner for sm-laptop(1024px) */}
      <div className="pb-5 md-mobile:pb-10 lg-mobile:pb-5 lg-tablet:pb-0 border border-[#e6e6e6] border-t-0 shadow-md lg-laptop:hidden">
        <div>
          <picture>
            <img
              className="object-cover w-screen sm-laptop:h-[520px]"
              src={imgSrc}
              alt="Banner 1"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 lg-tablet:gap-3 sm-laptop:gap-5">
          <div>
            <h1 className="text-2xl font-medium">{heading}</h1>
          </div>
          <div>
            <p>{desc}</p>
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
              <img className="object-cover" src={imgSrc} alt="Banner 1" />
            </picture>
          </div>
          <div className="bg-[#f2f2f2]  w-[40%]">
            <div className="relative flex flex-col items-start justify-center gap-5 px-3 top-[140px] me-12">
              <div>
                <h1 className="text-4xl font-medium text-black">{heading}</h1>
              </div>
              <div>
                <p className="text-base text-black">{desc}</p>
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
BannerOne.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default BannerOne;
