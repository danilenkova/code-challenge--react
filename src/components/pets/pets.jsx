import { useState, useEffect } from "react";
import Container from "../container/container";
import {
  StyledPets,
  Title,
  PetsList,
  Pet,
  Image,
  Description,
  Name,
  Info,
  Location,
} from "./pets.styled";
import marker from "../../images/location-marker.svg";

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      fetch("https://api.jsonbin.io/b/62498395d96a510f028fde92")
        .then((response) => response.json())
        .then(({ pets }) => {
          pets.map((pet) => {
            if (pet.age % 12 === 0) {
              pet.age = pet.age / 12;
              return pet.age;
            } else {
              pet.age = (pet.age / 12).toFixed(1);
              return pet.age;
            }
          });
          setPets(pets);
        });
    };
    fetchPets();
  }, []);
  return (
    <StyledPets>
      <Container>
        <Title>Available Pets</Title>
        <PetsList>
          {pets.map((pet) => (
            <Pet key={pet.name}>
              <Image src={pet.image} alt={pet.name} />
              <Description>
                <Name>{pet.name}</Name>
                <Info>
                  <div>
                    <p>
                      {pet.age} {pet.age === 1 ? "year" : "years"}
                    </p>
                  </div>
                  <Location>
                    <img src={marker} alt="marker" />
                    <p>
                      {pet.city}, {pet.state}
                    </p>
                  </Location>
                </Info>
              </Description>
            </Pet>
          ))}
        </PetsList>
      </Container>
    </StyledPets>
  );
}

export default Pets;
