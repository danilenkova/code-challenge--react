import Container from "../container/container";
import Logo from "../logo";
import DesktopMenu from "../menu/desktopMenu/desktopMenu";
import MobileMenu from "../menu/mobileMenu";
import { StyledHeader, HeaderNav } from "./header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderNav>
          <Logo />
          <DesktopMenu />
          <MobileMenu />
        </HeaderNav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
