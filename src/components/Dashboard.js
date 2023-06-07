import "../css/Dashboard.css";
import Sidebar from "./Sidebar";
import sneakerlogo from "../images/sneaker.png";
import { Outlet } from "react-router-dom";

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
      {/* <div className="toolbar">
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
      </div> */}
      <Outlet />
      </div>
      
    </div>
  );
}

export default Dashboard;
