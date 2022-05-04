import { createTheme } from "@mui/material";
import IranSansWeb from "../Fonts/IRANSansWeb.woff";

const Theme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#EDF2F4",
      gray: "#8D99AE",
    },
    primary: {
      main: "#2B2D42",
      contrastText: "#EDF2F4",
    },
    secondary: {
      main: "#D90429",
    },
    text: {
      primary: "#2B2D42",
      secondary: "#EDF2F4",
    },
  },
  typography: {
    fontFamily: IranSansWeb,
  },
});

export default Theme;
