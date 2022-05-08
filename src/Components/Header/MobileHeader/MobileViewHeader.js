import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import logo from "../../../Assets/logo.png";
import Classes from "./MobileViewHeader.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const MobileViewHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const burgerClass = `${Classes.menuIcon} ${isOpenMenu && Classes.active}`;
  const theme = useTheme();
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
            height: 30,
            zIndex: 10,
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

        <IconButton color="white" sx={{ zIndex: 5000 }}>
          <LocalMallOutlinedIcon fontSize="large" sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>
      <SwipeableDrawer
        anchor={"top"}
        open={isOpenMenu}
        onClose={toggleMenu}
        onOpen={toggleMenu}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <TextField
            id="input-search"
            placeholder="نام محصول یا دسته"
            fullWidth
            size="10rem"
            type="text"
            sx={{
              fontSize: "1.8rem",
              p: 4,
              color: "red",
            }}
            color="white"
            InputProps={{
              className: Classes.textInput,

              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    pl: 0.5,
                  }}
                >
                  <SearchIcon color="white" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Divider sx={{ backgroundColor: theme.palette.white.main }} />
          <List
            sx={(theme) => ({
              "*": {
                textAlign: "right",
                color: theme.palette.white.main,
                fontSize: "1.8rem",
              },
            })}
            // sx={{ fontSize: "5rem", color: "white" }}
          >
            <ListItemButton sx={{ fontSize: "5rem", color: "white" }}>
              <ListItemText
                sx={{ fontSize: "5rem", color: "white" }}
                primary="خانه"
              />
            </ListItemButton>
            <Divider variant="middle" />

            <ListItemButton alignItems="flex-start">
              <ListItemText primary="حساب کاربری" />
            </ListItemButton>
            <Divider variant="middle" />

            <ListItemButton alignItems="flex-start">
              <ListItemText primary="خدمات ما" />
            </ListItemButton>
            <Divider variant="middle" />

            <ListItemButton alignItems="flex-start">
              <ListItemText primary="درباره ما" />
            </ListItemButton>
            <Divider variant="middle" />

            <ListItemButton alignItems="flex-start">
              <ListItemText primary="خروج" />
            </ListItemButton>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MobileViewHeader;