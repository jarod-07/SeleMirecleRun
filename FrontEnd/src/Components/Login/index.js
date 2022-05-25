import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../Slices/user/requests/postLogin";
import { resetErrorMsg } from "../../Slices/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import './loginStyle.css';
const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  }

  const logBtn = async () => {
    dispatch(postLogin({ email, password }));
  }

  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="logIn-page">
      <div className="logIn-logo-box">
        <div className="logIn-logo-AppName">
          <div className="logIn-logo"></div>
          <div className="logIn-AppName">Sistema Planillas</div>
        </div>
        <p className="logIn-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.</p>
      </div>
      <div className="logIn-box">
        <div className="logIn-email-div">
          <input
            className="logIn-input"
            placeholder="Email"
            maxLength="50"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="logIn-password-div">
          <input
            className="logIn-input"
            placeholder="Password"
            maxLength="20"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="logIn-btn-box">
          <button
            className="logIn-btn-login"
            onClick={logBtn}
            >
            Sign In
          </button>
          {
            errorMessage && (
              <span className="logIn-error-message" >{errorMessage}</span>
            )
          }
          <hr className="linea-horizontal"></hr>
          <button className="logIn-btn-CheckIn" onClick={handleClick}>
            Sign Up
          </button>
        </div>
      </div>
      <footer className="logIn-footerCopyRights"> &copy; SeleMiracleRun </footer>
    </div>
  );
}

export default LoginComp;
