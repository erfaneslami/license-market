import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DesktopViewHeader from "./DesktopHeader/DesktopViewHeader";
import MobileViewHeader from "./MobileHeader/MobileViewHeader";

const Header = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar sx={{ zIndex: { xs: 9999, md: "auto" } }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            padding: { md: 3, xs: 1 },
            display: "flex",
            alignItems: "center",
          }}
        >
          {matchesDesktop && <DesktopViewHeader />}
          {!matchesDesktop && <MobileViewHeader />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
