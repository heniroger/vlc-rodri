export const Comment = () => {
  return (
    <>
      <div className="mb-3 my-auto mx-4 col-md-11">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
        <div className="my-2 me-1 float-end">
          <button type="submit" className="btn btn-primary mb-3">
            Comment
          </button>
        </div>
      </div>
    </>
  );
};
