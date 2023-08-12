import "./Header.css";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import Icon from "../Icon/Icon";
import { AppContext } from "../../AppContextProvider";
import { useContext } from "react";
const Header = (props) => {
  const globalContext = useContext(AppContext);

  const toggleSidebar = (event) => {
    event.preventDefault();
    globalContext.setIsSidebarOpen(!globalContext.isSidebarOpen);
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
      <div className="links">
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
      </div>
    </header>
  );
};

export default Header;
