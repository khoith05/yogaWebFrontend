import { useState } from "react";
import { Link } from "react-router-dom";
import signIn from "../service/signIn";
import { selectIsLoading } from "../store/loading";
import { useSelector, useDispatch } from "react-redux";
import { SIGNIN_LOADING } from "../utils/constant";
import { setUser } from "../store/user";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isLoading = useSelector((state) =>
    selectIsLoading(state, [SIGNIN_LOADING])
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(formData).then(({ message, username, email }) => {
      setError(message || "");
      if (username && email) {
        dispatch(setUser({ username, email }));
      }
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <label>Password</label>
            </div>
            <p className="text-danger">{error}</p>
            <button
              type="submit"
              className="btn login-button"
              disabled={isLoading}
            >
              Submit
            </button>
            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
