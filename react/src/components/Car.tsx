import { CarEntity } from "../services/Entity";

const Car = (props: CarEntity) => {
  return (
    <>
      <div className="card mb-3 col-md-9">
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.mark}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              Ajouté le {props.createdAt} par{" "}
              <b>
                {props.owner.firstName} {props.owner.lastName}
              </b>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Car;
