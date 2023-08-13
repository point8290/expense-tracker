import "./Header.css";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { AppContext } from "../../AppContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const globalContext = useContext(AppContext);
  const navigate = useNavigate();
  let userLoggedIn = false;

  if (localStorage.getItem("token")) {
    userLoggedIn = true;
  }
  const toggleSidebar = (event) => {
    event.preventDefault();
    globalContext.setIsSidebarOpen(!globalContext.isSidebarOpen);
  };

  const hideLogin = `${userLoggedIn ? "hideLinks" : ""}`;
  const hideLogout = `${userLoggedIn ? "" : "hideLinks"}`;

  const logoutUser = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    userLoggedIn = false;
    navigate("/Login");
  };
  return (
    <header className="header">
      <div>
        <Icon
          element={<FaAlignJustify color="white" size={"20px"} />}
          onClick={toggleSidebar}
        />
      </div>
      <div>
        <h1>Track Your Expenses</h1>
      </div>
      <div>
        <div className={hideLogin}>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
        </div>
        <div className={hideLogout}>
          <Button
            className="logoutButton"
            label="Logout"
            onClick={logoutUser}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
