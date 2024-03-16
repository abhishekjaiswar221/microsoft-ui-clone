import PropTypes from "prop-types";
import { ArrowUp } from "lucide-react";

//Function Based Component
const GrayButton = (props) => {
  // props-->{btnText}
  return (
    <div>
      <button className="bg-[#d9d9d9] text-black font-semibold py-2 ps-4 pe-5 rounded-sm flex gap-1 items-center justify-center">
        <ArrowUp size={20} strokeWidth={1.5} />
        {props.btnText}
        {/* btnText */}
      </button>
    </div>
  );
};
//Default Props
GrayButton.defaultProps = {
  btnText: "Microsoft Office",
};
//Prop Validation
GrayButton.propTypes = {
  btnText: PropTypes.string.isRequired,
};
export default GrayButton;
