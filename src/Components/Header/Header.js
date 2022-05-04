import { AppBar, Container, Toolbar } from "@mui/material";
import UserActions from "./UserActions";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ padding: 3 }}>
          <Navigation />
          <UserActions />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
