import { Box, Button, Menu, MenuItem, styled, Tab, Tabs } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { useState } from "react";
import logo from "../../../Assets/logo.png";

const MyTab = styled(Tab)((theme) => ({
  fontSize: "1.8rem",
  margin: 10,
}));

const Navigation = () => {
  const [value, setValue] = useState("home");
  const [anchorAboutUsEl, setAnchorAboutUsEl] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handelOpenAboutUsMenu = (e) => {
    setAnchorAboutUsEl(e.currentTarget);
  };
  const handelCloseAboutUsMenu = (e) => {
    setAnchorAboutUsEl(null);
  };

  return (
    <Tabs
      value={value}
      textColor="secondary"
      onChange={handleTabChange}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box
        sx={{
          height: 70,
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
      <MyTab label={"خانه"} value="home"></MyTab>
      <MyTab label={"خدمات ما"} value="services"></MyTab>
      <Button
        color="white"
        sx={{ fontSize: 18, display: "flex" }}
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
    </Tabs>
  );
};

export default Navigation;
