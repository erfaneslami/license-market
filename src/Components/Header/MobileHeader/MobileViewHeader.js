import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import logo from "../../../Assets/logo.png";
import Classes from "./MobileViewHeader.module.scss";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import MenuDrawer from "./MenuDrawer";

const MobileViewHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const burgerClass = `${Classes.menuIcon} ${isOpenMenu && Classes.active}`;

  const toggleMenu = () => {
    setIsOpenMenu((preState) => !preState);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ zIndex: 5000 }} className={burgerClass} onClick={toggleMenu}>
          <div>
            <span className={Classes.lineOne}></span>
            <span className={Classes.lineTow}></span>
          </div>
        </Box>

        <Box
          sx={{
            height: "3rem",
            width: "auto",
          }}
        >
          <img
            src={logo}
            alt="license-market logo"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>

        <IconButton color="white">
          <LocalMallOutlinedIcon fontSize="large" sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>
      <MenuDrawer
        isOpenMenu={isOpenMenu}
        onClose={toggleMenu}
        onOpen={toggleMenu}
      />
    </>
  );
};

export default MobileViewHeader;
