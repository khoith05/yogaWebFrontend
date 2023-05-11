import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/fitty.png";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toSvg } from "jdenticon";
import { initState, signOut } from "../store/user";
import signOutService from "../service/signOut";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLogin = useSelector((state) => state.user.isLogin);
  const username = useSelector((state) => state.user.username);
  const [src, setSrc] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 && location.pathname === "/") {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    const savedState = localStorage.getItem("user");
    if (savedState) {
      dispatch(initState(JSON.parse(savedState)));
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isLogin) {
      setSrc(toSvg(username, 50));
    }
  }, [isLogin, username]);

  useEffect(() => {
    if (location.pathname === "/" && activeLink === "exercise") {
      document
        .getElementById("sequence")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location, activeLink]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const logOut = () => {
    dispatch(signOut());
    signOutService();
  };

  const isHome = location.pathname === "/";

  return (
    <div>
      <Navbar
        expand="md"
        className={
          isHome ? `${scrolled ? "scrolled" : ""} position-fixed` : "navbar-bg"
        }
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                className={
                  activeLink === "exercise"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("exercise")}
              >
                Exercise
              </Nav.Link>
              {isLogin && (
                <Nav.Link
                  as={Link}
                  to="/history"
                  className={
                    activeLink === "history"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("history")}
                >
                  History
                </Nav.Link>
              )}
            </Nav>
            <span className="navbar-text">
              {isLogin ? (
                <>
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: src }}></div>
                  </div>
                  <div>
                    <p className="fs-5 m-1 text-white">{username}</p>
                  </div>
                  <button className="vvd" onClick={logOut}>
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <button className="vvd">
                      <span>Sign up</span>
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="vvd">
                      <span>Login</span>
                    </button>
                  </Link>
                </>
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
