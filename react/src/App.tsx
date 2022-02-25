import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { getCars } from "./services/CarService";
import { CarEntity } from "./services/Entity";
import Car from "./components/Car";

function App() {
  const [cars, setCars] = useState<CarEntity[]>([]);

  useEffect(() => {
    getCars().then((response) => {
      const { data } = response.data;
      return setCars(data);
    });
  }, []);

  console.log("ici c cars", cars);
  const postItems = cars.map((car: any) => {
    return (
      <>
        <Car
          id={car.id}
          photo={car.photo}
          mark={car.mark}
          description={car.description}
          createdAt={car.createdAt}
          comments={car.comments}
          owner={car.owner}
        />
      </>
    );
  });

  return (
    <>
      <NavBar />
      <div className="container ">{postItems}</div>
    </>
  );
}

export default App;
