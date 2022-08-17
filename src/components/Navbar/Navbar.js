import { NavContainer } from "./NavbarStyles";

const Navbar = ({ updateTheme }) => {
  const themeClickHandler = () => {
    updateTheme();
  };

  return (
    <NavContainer>
      <button className="accent" onClick={themeClickHandler}>
        Change theme
      </button>
      <button>Change language</button>
    </NavContainer>
  );
};

export default Navbar;
