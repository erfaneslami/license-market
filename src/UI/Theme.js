import { createTheme } from "@mui/material";
import IranSansWeb from "../Fonts/IRANSansWeb.woff";

const Theme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#EDF2F4",
      gray: "#8D99AE",
    },
    white: {
      main: "#EDF2F4",
    },
    primary: {
      main: "#2B2D42",
      contrastText: "#EDF2F4",
    },
    secondary: {
      main: "#EF233C",
    },
    test: {
      main: "#EF233C",
    },
    text: {
      primary: "#2B2D42",
      secondary: "#EDF2F4",
    },
  },
  typography: {
    fontFamily: IranSansWeb,
    mobileMenuList: {
      fontSize: "1.8rem",
    },
  },
  tabs: {
    fontSize: "1.8rem",
    m: 2,
  },
});

export default Theme;
