import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function FavoriteCar() {
  const [car, setCar] = useState("Jaguar");

  return (
    <>
      <h1>My favorite car is {car}!</h1>
      <button
        type="button"
        onClick={() => setCar("Lamborgini")}
      >Lamborgini</button>
      

      <button
        type="button"
        onClick={() => setCar("Ferrari")}
      >Ferrari</button>
      <button
        type="button"
        onClick={() => setCar("Porche")}
      >Porche</button>
      <button
        type="button"
        onClick={() => setCar("Jaguar")}
      >Jaguar</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteCar />);

export default FavoriteCar;
