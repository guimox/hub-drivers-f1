import { NavContainer } from "./NavbarStyles";
import { ReactComponent as ThemeSVG } from "../../media/theme.svg";

const Navbar = ({ updateTheme }) => {
  const themeClickHandler = () => {
    updateTheme();
  };

  return (
    <NavContainer>
      <button className="accent" onClick={themeClickHandler}>
        <ThemeSVG />
      </button>
    </NavContainer>
  );
};

export default Navbar;
