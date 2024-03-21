import PropTypes from "prop-types";
import BlueButton from "./BlueButton";

const ProductCard = ({ imgSrc, heading, desc, btnText }) => {
  return (
    <>
      <div className="border border-[#e6e6e6] mx-2 lg-tablet:mx-0 md-mobile:mx-3 shadow-md w-[301px] md-mobile:w-[350px] lg-mobile:w-[400px] lg-mobile:h-[465px] lg-tablet:w-[350px] sm-laptop:w-[465px] sm-laptop:h-[480px] lg-laptop:w-[308px] lg-laptop:h-[435px] h-[435px]">
        <div>
          <picture>
            <img className="w-full" src={imgSrc} alt="Surface Laptop 5" />
          </picture>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">{heading}</h1>
            <p>{desc}</p>
          </div>
          <div>
            <BlueButton btnText={btnText} />
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
export default ProductCard;
