import { mockPets } from "../utils/dataPetsPage";
import "../styles/pets.scss";

import Heart from "../assets/heart-pets.svg";
import ScrollPet from "../components/ScrollPet";

import { useState } from "react";

export default function Pets() {
  const [itemsToShow, setItemsToShow] = useState(4);

  const handleShowMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 4);
  };

  return (
    <main className="pets-main">
      <div className="pets-title">
        <h2>
          <span>Pets</span> namorando
        </h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>

      <div>
        <div className="pets-container">
          {mockPets.slice(0, itemsToShow).map((pets, index) => (
            <ScrollPet key={index}>
              <div className="pets-content">
                <div className="pets-primary">
                  <img src={pets.photoPetOne} alt="Foto do pet" />
                  <p> {pets.namePetOne}</p>
                </div>
                <div className="pets-secundary">
                  <img src={pets.photoPetTwo} alt="Foto do pet" />
                  <p> {pets.namePetTwo}</p>
                </div>
                <img src={Heart} alt="Icone do pet" className="pets-heart" />
              </div>
            </ScrollPet>
          ))}
        </div>
      </div>

      <div className="pets-btn">
        {itemsToShow < mockPets.length ? (
          <button onClick={handleShowMore}>Carregar mais antigos</button>
        ) : (
          <button>Isso é tudo!</button>
        )}
      </div>
    </main>
  );
}
