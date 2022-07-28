import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAdminsAction } from "../../redux/actions/admins";

const Navbar = () => {
  const me = useSelector(state => state.auth.data.admin);
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar my-0 py-0" style={{}}>
      <div className="wrapper" style={{ position: "relative", top: "-10px" }}>
        <div className="items">
          <div className="item image">
            {me &&
              <img
                src={me?.usersprofile?.profilePic}
                // src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
