import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Backdrop } from "./Backdrop/Backdrop";
import Profile from "../Pages/Profile/Profile";
import { Auxiliar } from "../UI/Auxiliar";
import { Header } from "../UI/Header/Header";
export const Layout = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sideDrawerClosedHandler = () => {
    setDrawerOpen(false);
  };

  const sideDrawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Auxiliar>
      <Header drawerToggleClicked={sideDrawerToggleHandler} />
      <Sidebar
        show={drawerOpen}
        open={drawerOpen}
        closed={sideDrawerClosedHandler}
      />

      <main>{props.children}</main>
    </Auxiliar>
  );
};
