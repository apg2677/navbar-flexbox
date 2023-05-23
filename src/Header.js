import React, { useState } from "react";
import DrawerComp from "./DrawerComp";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const Header = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    console.log("e.target", val);
    setValue(val);
  };
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />

          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            onChange={handleChange}
            value={value}
            indicatorColor="secondary"
          >
            <Tab label="Products" />
            <Tab label="Services" />
            <Tab label="Contact Us" />
            <Tab label="About Us" />
          </Tabs>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: 2 }} variant="contained">
            Sign Up
          </Button>
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </>
  );
};

export default Header;
