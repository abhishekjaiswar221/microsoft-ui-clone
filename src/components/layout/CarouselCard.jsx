import PropTypes from "prop-types";
import Button from "../ui/Button";

const CarouselCard = ({ imgSrc, heading, desc }) => {
  return (
    <div className="px-1">
      <div className="pb-5 border border-[#e6e6e6] shadow-md">
        <div>
          <picture>
            <img className="w-screen" src={imgSrc} alt="Banner 1" />
          </picture>
        </div>
        <div className="flex flex-col justify-center gap-5 p-6">
          <div>
            <h1 className="text-2xl font-medium">{heading}</h1>
          </div>
          <div>
            <p>{desc}</p>
          </div>
          <div>
            <Button btnText={"Lean more"} />
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
