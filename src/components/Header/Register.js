import React from 'react'

const Register = () => {
  return (
    <MODAL className="card-body p-4 p-sm-5 P-5 card-registration">
    <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
    <form>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInputUsername"
                placeholder="myusername" required autofocus />
            <label for="floatingInputUsername">Username</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInputEmail"
                placeholder="name@example.com" />
            <label for="floatingInputEmail">Email address</label>
        </div>
        <hr />
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword"
                placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPasswordConfirm"
                placeholder="Confirm Password" />
            <label for="floatingPasswordConfirm">Confirm Password</label>
        </div>
        <div className="d-grid mb-2">
            <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                type="submit">Register</button>
        </div>
        <a className="d-block text-center mt-2 small" href="#">Have an account? Sign In</a>
        <hr className="my-4" />
        <div className="d-grid mb-2">
            <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                <i className="fab fa-google me-2"></i> Sign up with Google
            </button>
        </div>
        <div className="d-grid">
            <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                type="submit">
                <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
            </button>
        </div>
    </form>
     
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-lg" data-dismiss="modal">Close</button>
    </div>
</MODAL >
  )
}

export default Register