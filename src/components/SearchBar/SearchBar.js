import { SearchBarStyled } from "./SearchBarStyles";

const SearchBar = ({ onInput }) => {
  const catchInputHandler = (e) => onInput(e.target.value);

  return (
    <>
      <SearchBarStyled
        type="text"
        placeholder="Enter the driver's name"
        onChange={catchInputHandler}
      />
    </>
  );
};

export default SearchBar;
