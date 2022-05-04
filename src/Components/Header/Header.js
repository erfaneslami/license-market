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
  const [anchorProfileEl, setAnchorProfileEl] = useState(null);
  const [anchorAboutUsEl, setAnchorAboutUsEl] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handelOpenProfileMenu = (e) => {
    setAnchorProfileEl(e.currentTarget);
  };
  const handelCloseProfileMenu = (e) => {
    setAnchorProfileEl(null);
  };

  const handelOpenAboutUsMenu = (e) => {
    setAnchorAboutUsEl(e.currentTarget);
  };
  const handelCloseAboutUsMenu = (e) => {
    setAnchorAboutUsEl(null);
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
            <Button
              color="white"
              sx={{ fontSize: 18 }}
              onClick={handelOpenAboutUsMenu}
              size="large"
              endIcon={
                anchorAboutUsEl ? (
                  <ArrowDropUpOutlinedIcon sx={{ marginRight: 1 }} />
                ) : (
                  <ArrowDropDownOutlinedIcon sx={{ marginRight: 1 }} />
                )
              }
            >
              درباره ما
            </Button>
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
              onClick={handelOpenProfileMenu}
              size="large"
              endIcon={
                anchorProfileEl ? (
                  <ArrowDropUpOutlinedIcon sx={{ marginRight: 1 }} />
                ) : (
                  <ArrowDropDownOutlinedIcon sx={{ marginRight: 1 }} />
                )
              }
            >
              حساب کاربری
            </Button>
            <Menu
              id="profile-menu-appbar"
              open={Boolean(anchorProfileEl)}
              onClose={handelCloseProfileMenu}
              anchorEl={anchorProfileEl}
              sx={{
                "*": { fontSize: 15 },
              }}
              keepMounted
            >
              <MenuItem>مشاهده حساب کاربری</MenuItem>
              <MenuItem>سفارشات</MenuItem>
              <MenuItem>خروج</MenuItem>
            </Menu>
            <Menu
              id="about-us-menu-appbar"
              open={Boolean(anchorAboutUsEl)}
              onClose={handelCloseAboutUsMenu}
              anchorEl={anchorAboutUsEl}
              sx={{
                "*": { fontSize: 15 },
              }}
              keepMounted
            >
              <MenuItem>درباره لایسنس مارکت</MenuItem>
              <MenuItem>نظرسنجی و بهبود خدمات</MenuItem>
              <MenuItem>قوانین</MenuItem>
              <MenuItem>ارتباط با ما</MenuItem>
              <MenuItem>همکاری با ما</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
