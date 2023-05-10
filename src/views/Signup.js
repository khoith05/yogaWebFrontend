import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SIGNUP_LOADING } from "../utils/constant";
import signUp from "../service/signUp";
import { selectIsLoading } from "../store/loading";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/user";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  const isLoading = useSelector((state) =>
    selectIsLoading(state, [SIGNUP_LOADING])
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.password ||
      !formData.confirmPassword ||
      formData.confirmPassword < 6 ||
      formData.password < 6
    ) {
      return setError("Password is too short");
    }
    if (formData.password !== formData.confirmPassword) {
      return setError("Password not match");
    }
    if (!formData.username || formData.username.length < 6) {
      return setError("Username is too short");
    }

    signUp(formData).then(({ message, username, email }) => {
      setError(message || "");
      if (username && email) {
        dispatch(setUser({ username, email }));
        navigate("/");
      }
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="signup">
      <div className="wrapper">
        <div className="form-box">
          <h2>Registration</h2>
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
                <ion-icon name="person"></ion-icon>
              </span>
              <input
                type="username"
                name="username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              <label>Username</label>
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
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <label>Re-enter Password</label>
            </div>
            <p className="text-danger">{error}</p>
            <button type="submit" className="btn" disabled={isLoading}>
              Submit
            </button>
            <div className="login-register">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="register-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
