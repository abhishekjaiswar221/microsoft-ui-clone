import PropTypes from "prop-types";
import BlueButton from "../ui/BlueButton";

const CarouselCard = ({ imgSrc, heading, desc }) => {
  return (
    <div className="px-1">
      <div className="pb-5 md-mobile:pb-10 lg-mobile:pb-5 lg-tablet:pb-0 border border-[#e6e6e6] shadow-md lg-laptop:shadow-none">
        <div>
          <picture>
            <img
              className="object-cover w-screen sm-laptop:h-[520px] lg-laptop:h-[450px]"
              src={imgSrc}
              alt="Banner 1"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 lg-laptop:p-10 lg-tablet:gap-3 sm-laptop:gap-5 lg-laptop:absolute lg-laptop:top-40 lg-laptop:w-[600px] lg-laptop:right-0">
          <div>
            <h1 className="text-2xl font-medium lg-laptop:text-4xl">
              {heading}
            </h1>
          </div>
          <div>
            <p>{desc}</p>
          </div>
          <div>
            <BlueButton btnText={"Lean more"} />
          </div>
        </div>
      </div>
    </div>
  );
};
CarouselCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default CarouselCard;
