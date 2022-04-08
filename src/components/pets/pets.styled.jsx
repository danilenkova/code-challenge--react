import styled from "styled-components";

export const StyledPets = styled.section`
  padding: 52px 0 81px;
  @media screen and (min-width: 600px) {
    padding: 89px 0 221px;
  }
  @media screen and (min-width: 1728px) {
    padding: 101px 0 211px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 51px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #1a1a1a;
  @media screen and (min-width: 600px) {
    text-align: start;
    font-size: 48px;
    line-height: 56px;
  }
`;

export const PetsList = styled.ul`
  @media screen and (min-width: 1500px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Pet = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1500px) {
    width: 420px;
  }
  @media screen and (min-width: 1728px) {
    width: calc((100% - 186px) / 3);
  }
  border-radius: 12px;
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 52px;
    @media screen and (min-width: 1500px) {
      margin: 0;
    }
    @media screen and (min-width: 1728px) {
      margin-right: 93px;
    }
  }
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

export const Image = styled.img`
  height: 315px;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 17px 10px 17px 21px;
  background: #fa4d16;
`;

export const Name = styled.h3`
  font-size: 30px;
  line-height: 35px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 23px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
`;
