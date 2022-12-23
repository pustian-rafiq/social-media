import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import {   DarkModeOutlined, EmailOutlined, GridViewOutlined, HomeOutlined, NotificationsOutlined, PersonOutlined, SearchOutlined, WbSunnyOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const {toggleDarkMode, darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration:'none' }}>
          <span>Social Media</span>
        </Link>
        <HomeOutlined/>
        {
        darkMode ? 
        <WbSunnyOutlined onClick={toggleDarkMode} />
        :
        <DarkModeOutlined onClick={toggleDarkMode} />

      }
        <GridViewOutlined/>
        <div className="search">
          <SearchOutlined/>
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="right">
          <PersonOutlined/>
          <EmailOutlined/>
          <NotificationsOutlined/>
          <div className="user">
            <img src="/images/profile.jpg" alt="Profile" />
            <span>{ currentUser?.name}</span>
          </div>
      </div>
       
    </div>
  )
}

export default Navbar