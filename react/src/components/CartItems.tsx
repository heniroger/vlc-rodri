import Car from "./Car";
import { CarEntity } from "../services/Entity";

export interface CarItemProps {
  cars: CarEntity[];
}

export const CarItems = (props: CarItemProps) => {
  const elements = props.cars.map((car: any, index: number) => {
    return (
      <Car
        id={car.id}
        key={index}
        photo={car.photo}
        mark={car.mark}
        description={car.description}
        createdAt={car.createdAt}
        comments={car.comments}
        owner={car.owner}
      />
    );
  });

  return (
    <>
      <div className="container me-4">{elements}</div>
    </>
  );
};
