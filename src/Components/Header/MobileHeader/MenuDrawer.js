import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Collapse,
  Divider,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const MenuDrawer = (props) => {
  const theme = useTheme();
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const handleOpenNestedMenu = () => {
    setIsAboutUsOpen((preState) => !preState);
  };

  const MenuList = [
    {
      title: "خانه",
    },
    {
      title: "حساب کاربری",
    },
    {
      title: "خدمات ما",
    },
    {
      title: "درباره ما",
      nestedTitles: [
        "درباره لایسنس مارکت",
        "نظرسنجی و بهبود خدمات",
        "قوانین",
        "ارتباط با ما",
        "همکاری با ما",
      ],
    },
    {
      title: "خروج",
    },
  ];

  return (
    <SwipeableDrawer
      anchor={"top"}
      open={props.isOpenMenu}
      onClose={props.onClose}
      onOpen={props.onOpen}
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
          type="text"
          sx={{
            p: 4,
          }}
          color="white"
          InputProps={{
            style: {
              fontSize: "1.8rem",
              color: `${theme.palette.white.main}`,
              padding: 10,
            },
            // className: Classes.textInput,

            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  pl: 1,
                }}
              >
                <SearchIcon fontSize="large" color="white" />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Divider sx={{ backgroundColor: theme.palette.white.main }} />
        <List>
          {MenuList.map((item) => {
            return (
              <li key={item.title}>
                {item.nestedTitles ? (
                  <>
                    <ListItemButton
                      onClick={handleOpenNestedMenu}
                      sx={{
                        textAlign: "right",
                        color: theme.palette.white.main,
                      }}
                    >
                      <ListItemText>
                        <Typography variant="mobileMenuList">
                          {item.title}
                        </Typography>
                      </ListItemText>
                      {isAboutUsOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={isAboutUsOpen}>
                      <List>
                        {item.nestedTitles.map((nestedTitle) => {
                          return (
                            <ListItemButton
                              key={nestedTitle}
                              component="li"
                              sx={{
                                textAlign: "right",
                                color: theme.palette.white.main,
                                pr: 4,
                              }}
                            >
                              <ListItemText>
                                <Typography variant="mobileMenuList">
                                  {nestedTitle}
                                </Typography>
                              </ListItemText>
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton
                    sx={{
                      textAlign: "right",
                      color: theme.palette.white.main,
                    }}
                  >
                    <ListItemText>
                      <Typography variant="mobileMenuList">
                        {item.title}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                )}
                <Divider variant="middle" />
              </li>
            );
          })}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
