export const Register = () => {
  return (
    <>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="htmlForm-floating mb-3 mb-md-0">
                              <input
                                className="htmlForm-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                              />
                              <label htmlFor="inputFirstName">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="htmlForm-floating">
                              <input
                                className="htmlForm-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                              />
                              <label htmlFor="inputLastName">Last name</label>
                            </div>
                          </div>
                        </div>
                        <div className="htmlForm-floating mb-3">
                          <input
                            className="htmlForm-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="htmlForm-floating mb-3 mb-md-0">
                              <input
                                className="htmlForm-control"
                                id="inputPassword"
                                type="password"
                                placeholder="Create a password"
                              />
                              <label htmlFor="inputPassword">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="htmlForm-floating mb-3 mb-md-0">
                              <input
                                className="htmlForm-control"
                                id="inputPasswordConfirm"
                                type="password"
                                placeholder="Confirm password"
                              />
                              <label htmlFor="inputPasswordConfirm">
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <a
                              className="btn btn-primary btn-block"
                              href="login.html"
                            >
                              Create Account
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="login.html">Have an account? Go to login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
