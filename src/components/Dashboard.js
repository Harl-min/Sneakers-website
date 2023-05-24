import "../css/Dashboard.css";
import user from "../images/user.png"
import coupon from "../images/coupon.png"
import FoodCard from "./FoodCard";
import Sidebar from "./Sidebar";
import sneakerlogo from "../images/sneaker.png";
import { AvailableShoes } from "../Data/data";
import { Outlet } from "react-router-dom";
import {
  Avatar,
  Badge,
  IconButton,
  SvgIcon,
  Tooltip,
} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="navbar-container">
        <img src={sneakerlogo} alt='lilies'/>
        <button id="hamburger-menu">
          <nav id="sidebar-menu"></nav>
        </button>
      </div>
      <div className="test">
      <Sidebar />
      </div>
      <div className="dashboard-content">
      <div className="toolbar">
      <Tooltip title="Notifications">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small">
                    <NotificationsNoneOutlinedIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
            <div>
            <img src={user} alt="profile-pic" />
          </div>
      </div>
      <Outlet />
      </div>
      
    </div>
  );
}

export default Dashboard;
