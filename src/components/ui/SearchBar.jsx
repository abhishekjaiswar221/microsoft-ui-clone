import { Search, ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";

const SearchBar = ({ hideSearch }) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-2 mx-3 h-14">
          <div className="flex items-center justify-center w-full h-10">
            <ArrowLeft onClick={hideSearch} size={20} strokeWidth={1.5} />
          </div>
          <div className="border rounded-sm border-[#0067b8] w-full flex h-10 justify-center items-center px-2">
            <Search size={20} strokeWidth={1.5} />
            <input
              className="px-2 outline-none w-60 md-mobile:w-72 lg-mobile:w-[340px] lg-tablet:w-[680px]"
              type="text"
              placeholder="Search Microsoft.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};
SearchBar.propTypes = {
  hideSearch: PropTypes.func.isRequired,
};
export default SearchBar;
