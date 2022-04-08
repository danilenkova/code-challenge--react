import styled from "styled-components";
import mobile from "../../images/dog-bg-mobile.jpeg";
import desktop from "../../images/dog-bg-desktop.jpeg";

export const StyledLanding = styled.section`
  max-width: 600px;
  height: 830px;
  margin: 0 auto;
  padding-top: 67px;
  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 623px;
  @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 1727px;
    background-image: url(${desktop});
    background-position: bottom;
    background-size: cover;
  }
  @media screen and (min-width: 1728px) {
    max-width: 2099px;
    height: 1045px;
    padding-top: 170px;
  }
  @media screen and (min-width: 2100px) {
    max-width: 2400px;
    height: 1127px;
    background-position: bottom -300px left 0;
    background-size: 2773px;
    mix-blend-mode: normal;
  }
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  width: 324px;
  margin: 0 auto 44px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 795px;
    text-align: start;
    margin: 0;
    margin-bottom: 55px;
    font-size: 96px;
    line-height: 112px;
  }
`;

export const Button = styled.button`
  width: 268px;
  height: 68px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  background: #fa4d16;
  border-radius: 29px;
  border: none;
  @media screen and (min-width: 1728px) {
    width: 414px;
    height: 105px;
    font-size: 40px;
    line-height: 47px;
  }
`;
