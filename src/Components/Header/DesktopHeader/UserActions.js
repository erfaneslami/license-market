import { Box, IconButton, Button, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { useState } from "react";
const UserActions = () => {
  const [anchorProfileEl, setAnchorProfileEl] = useState(null);

  const handelOpenProfileMenu = (e) => {
    setAnchorProfileEl(e.currentTarget);
  };
  const handelCloseProfileMenu = (e) => {
    setAnchorProfileEl(null);
  };

  return (
    <>
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
      </Box>
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
    </>
  );
};

export default UserActions;
