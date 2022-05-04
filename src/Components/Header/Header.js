import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import logo from "../../Assets/logo.png";
import { useState } from "react";

const MyTab = styled(Tab)({
  fontSize: "1.8rem",
  margin: 10,
});

const Header = () => {
  const [value, setValue] = useState("home");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handelOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handelCloseMenu = (e) => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ padding: 3 }}>
          <Tabs value={value} textColor="secondary" onChange={handleTabChange}>
            <Avatar
              src={logo}
              sx={{ cursor: "pointer", width: 70, height: 70 }}
              variant="square"
            ></Avatar>

            <MyTab label={"خانه"} value="home"></MyTab>
            <MyTab label={"خدمات ما"} value="services"></MyTab>
            <MyTab label={"درباره ما"} value="aboutUs"></MyTab>
          </Tabs>
          <Box
            sx={{
              mr: "auto",
              display: "flex",
              alignItems: "center",
              fontSize: 50,
            }}
          >
            <IconButton color="white">
              <SearchIcon fontSize="large" sx={{ fontSize: 22 }} />
            </IconButton>
            <IconButton color="white">
              <LocalMallIcon fontSize="large" sx={{ fontSize: 22 }} />
            </IconButton>
            <Button
              color="white"
              sx={{ fontSize: 18 }}
              onClick={handelOpenMenu}
              size="large"
              endIcon={
                anchorEl ? (
                  <ArrowDropUpOutlinedIcon sx={{ marginRight: 1 }} />
                ) : (
                  <ArrowDropDownOutlinedIcon sx={{ marginRight: 1 }} />
                )
              }
            >
              حساب کاربری
            </Button>
            <Menu
              id="menu-appbar"
              open={Boolean(anchorEl)}
              onClose={handelCloseMenu}
              anchorEl={anchorEl}
              // anchorOrigin={{
              //   vertical: "bottom",
              //   horizontal: "left",
              // }}
              keepMounted
              // transformOrigin={{
              //   vertical: "down",
              //   horizontal: "left",
              // }}
            >
              <MenuItem>مشاهده حساب کاربری</MenuItem>
              <MenuItem>سفارشات</MenuItem>
              <MenuItem>خروج</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
