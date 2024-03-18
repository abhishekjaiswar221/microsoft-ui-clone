import PropTypes from "prop-types";
import BlueButton from "./BlueButton";

const ProductCard = ({ imgSrc, heading, desc, btnText }) => {
  return (
    <>
      <div className="border border-[#e6e6e6] m-2 md-mobile:mx-3 shadow-md w-[301px] h-[435px] ">
        <div>
          <picture>
            <img className="w-full" src={imgSrc} alt="Surface Laptop 5" />
          </picture>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div>
            <h1 className="text-xl font-semibold">{heading}</h1>
          </div>
          <div>
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