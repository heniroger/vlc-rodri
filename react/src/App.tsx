import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { getCars } from "./services/CarService";
import { CarEntity } from "./services/Entity";
import Car from "./components/Car";
import { CarItems } from "./components/CartItems";

function App() {
  const [cars, setCars] = useState<CarEntity[]>([]);

  useEffect(() => {
    getCars().then((response) => {
      const { data } = response.data;
      return setCars(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <CarItems cars={cars} />
    </>
  );
}

export default App;
