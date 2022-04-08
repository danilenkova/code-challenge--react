import { StyledLanding, LandingContent, Title, Button } from "./landing.styled";
import Container from "../container/container";

const Landing = () => {
  return (
    <StyledLanding>
      <Container>
        <LandingContent>
          <Title>Find Your New Best Friend</Title>
          <Button type="button">Get Started</Button>
        </LandingContent>
      </Container>
    </StyledLanding>
  );
};

export default Landing;
