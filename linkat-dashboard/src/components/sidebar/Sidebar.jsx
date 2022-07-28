import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect } from "react";
import { logoutAction } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LinkIcon from '@mui/icons-material/Link';
import { getAdminsAction } from "../../redux/actions/admins";



const roles = {
  "user": "User",
  "admin": "Admin",
  "superAdmin": "SuperAdmin"
}

const Sidebar = () => {
  // const { dispatchColor } = useContext(DarkModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const me = useSelector(state => state.auth.data.admin);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Linkat Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admins" style={{ textDecoration: "none" }}>
            <li>
              <AdminPanelSettingsIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/linktypes" style={{ textDecoration: "none" }}>
            <li>
              <LinkIcon className="icon" />
              <span>Link Types</span>
            </li>
          </Link>
          <p className="title">ME</p>
          {me &&
            <div className="d-flex flex-column">
              {/* <img src={me?.usersprofile?.profilePic} style={{ width: "3em", height: "3em" }} /> */}
              <span><b>Username:</b> {me.username}</span>
              <span><b>Email: </b>{me.email}</span>
              <span><b>Role:</b> {roles[me.role.role]}</span>
            </div>
          }
          <li
            onClick={async () => {
              await dispatch(logoutAction())
                .then(() => navigate("/signin"))
                .catch((err) => console.log(err));
            }}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Sidebar;
