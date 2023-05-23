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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const PAGES = ["Products", "Services", "About Us", "Contact Us"];

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log("theme", theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log("isMatch", isMatch);
  const handleChange = (e, val) => {
    console.log("e.target", val);
    setValue(val);
  };
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: 24, marginLeft: "1rem" }}>
                SHOPPEE
              </Typography>
              <DrawerComp pages={PAGES} />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                onChange={handleChange}
                value={value}
                indicatorColor="secondary"
              >
                {PAGES.map((page, i) => {
                  return <Tab key={i} label={page} />;
                })}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: 2 }} variant="contained">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
