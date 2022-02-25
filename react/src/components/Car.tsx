import { CarEntity } from "../services/Entity";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

const Car = (props: CarEntity) => {
  const comments = props.comments;
  const commentItems = comments.map((comment) => {
    return (
      <>
        <Comment
          id={comment.id}
          content={comment.content}
          user={comment.user}
        />
      </>
    );
  });
  return (
    <>
      <div className="card mb-3 col-md-9 car">
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

        {commentItems}
        <CommentForm />
      </div>
    </>
  );
};

export default Car;
