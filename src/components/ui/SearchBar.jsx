import { Search, ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import microsoftLogo from "../../assets/images/microsoft-logo.png";

const SearchBar = ({ hideSearch }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 px-3 h-14 sm-laptop:px-10 lg-laptop:px-20">
        <div className="hidden pr-3 lg-laptop:pr-5 sm-laptop:block">
          <picture>
            <img
              className="h-[23px] w-36 lg-laptop:w-32"
              src={microsoftLogo}
              alt="Microsoft Logo"
            />
          </picture>
        </div>
        <div className="flex items-center justify-center h-10 sm-laptop:hidden">
          <ArrowLeft onClick={hideSearch} size={20} strokeWidth={1.5} />
        </div>
        <div className="border rounded-sm border-[#0067b8] w-full flex h-10 justify-center items-center px-2">
          <Search size={20} strokeWidth={1.5} />
          <input
            className="w-full px-2 outline-none"
            type="text"
            placeholder="Search Microsoft.com"
          />
        </div>
        <div className="hidden sm-laptop:block" id="cancel-btn">
          <button
            className="px-3 py-[6px] border border-black"
            onClick={hideSearch}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
SearchBar.propTypes = {
  hideSearch: PropTypes.func.isRequired,
};
export default SearchBar;
