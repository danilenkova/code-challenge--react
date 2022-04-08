import image from "../../images/logo.svg";
import { StyledLogo } from "./logo.styled";

const logo = image;

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
