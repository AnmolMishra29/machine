import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const SideBar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  //const handlecollapsed = () => setIsCollapsed((show) => !show);
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      expanded="true"
      disable="true"
      style={{ backgroundColor: "#007fff" }}
      position="fixed"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="factoryregistration">
        <NavItem eventKey="factoryregistration">
          <NavIcon>
            <i className="fa-solid fa-user" style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>User Registration</NavText>
        </NavItem>
        <NavItem eventKey="">
          <NavIcon>
            {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }} /> */}
            <i class="fa-solid fa-shop" style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>Store Registration</NavText>
        </NavItem>
        <NavItem eventKey="factoryregistration">
          <NavIcon>
            {/* <i className="fa-solid fa-user" style={{ fontSize: "1.5em" }} /> */}
            {/* <DesktopMacIcon style={{ fontSize: "1.8em", paddingTop: "2px" }} /> */}
          </NavIcon>
          <NavText>Device Registration</NavText>
        </NavItem>
        <NavItem eventKey="machineregistration">
          <NavIcon>
            <i className="fa-solid fa-store" style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>Counter Registration</NavText>
        </NavItem>
        <NavItem eventKey="factoryregistration">
          <NavIcon>
            <i className="fa-solid fa-users" style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>All Users</NavText>
        </NavItem>
        <NavItem eventKey="factoryregistration">
          <NavIcon>
            <i className="fa-solid fa-outdent" style={{ fontSize: "1.5em" }} />
          </NavIcon>
          <NavText>LogOut</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideBar;
