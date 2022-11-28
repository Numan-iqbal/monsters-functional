import "../searchBox/SearchStyle.css";
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={`search-box ${className}`}
      input="serach"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  </div>
);

export default SearchBox;
