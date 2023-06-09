import { Button } from "@mui/material";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  let navigate = useNavigate();

  const token = localStorage.getItem("token");

  const routeChange = (path) => {
    navigate(path);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    handleLoginRedirect();
  };

  const handleRegisterRedirect = () => routeChange("/register");
  const handleLoginRedirect = () => routeChange("/login");
  const handlePostsRedirect = () => routeChange("/posts");
  const handlePostCreateRedirect = () => routeChange("/post/create");
  const handleProfileRedirect = () => routeChange("/profile");

  return (
    <header>
      <div className="header">
        <div style={{ display: token ? "flex" : "none" }}>
          <div
            id="myProfile"
            onClick={handleProfileRedirect}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <AccountBoxOutlinedIcon fontSize="large" />
            <p style={{ marginLeft: "15px" }}>Profile</p>
          </div>
          <div style={{ display: "flex", marginLeft: "15px" }}>
            <Button
              id="postsButtonz"
              onClick={handlePostsRedirect}
              style={{
                display: token ? "flex" : "none",
                fontSize: 16,
                textTransform: "none",
                borderRadius: 15,
              }}
              variant="contained"
            >
              View Posts
            </Button>
            <Button
              id="newPostButton"
              onClick={handlePostCreateRedirect}
              style={{
                display: token ? "flex" : "none",
                fontSize: 16,
                textTransform: "none",
                borderRadius: 15,
                marginLeft: "15px",
              }}
              variant="contained"
            >
              New Post
            </Button>
          </div>
        </div>
        <div
          id="mainRedirectDiv"
          onClick={token ? handlePostsRedirect : handleLoginRedirect}
          style={{ cursor: "pointer", marginRight: "400px" }}
        >
          <img src="/images/logo_header.png" alt="logo" />
          <p>Share what's on your mind with OpenMind</p>
        </div>

        <Button
          id="header-log-oug-button"
          onClick={handleLogOut}
          style={{
            display: token ? "flex" : "none",
            backgroundColor: "white",
            color: "black",
            fontSize: 16,
            textTransform: "none",
            borderRadius: 15,
          }}
          className="header-log-oug-button"
          variant="contained"
        >
          Log Out
        </Button>

        <div style={{ display: !token ? "flex" : "none" }}>
          <Button
            id="header-login-button"
            onClick={handleLoginRedirect}
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: 16,
              textTransform: "none",
              borderRadius: 15,
            }}
            className="header-login-button"
            variant="contained"
          >
            Login
          </Button>

          <Button
            id="header-register-button"
            variant="contained"
            onClick={handleRegisterRedirect}
            style={{
              fontSize: 16,
              textTransform: "none",
              borderRadius: 15,
            }}
            className="header-register-button"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
