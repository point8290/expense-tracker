import "./Header.css";
import { FaAlignJustify } from "react-icons/fa";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { AppContext } from "../../AppContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const globalContext = useContext(AppContext);
  const navigate = useNavigate();

  const toggleSidebar = (event) => {
    event.preventDefault();
    globalContext.setIsSidebarOpen(!globalContext.isSidebarOpen);
  };

  const hideLogout = `${globalContext.isUserLoggedIn ? "" : "hideLinks"}`;

  const logoutUser = (event) => {
    event.preventDefault();
    globalContext.setIsUserLoggedIn(false);
    localStorage.clear();
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
      <div className={hideLogout}>
        <Button className="logoutButton" label="Logout" onClick={logoutUser} />
      </div>
    </header>
  );
};

export default Header;
