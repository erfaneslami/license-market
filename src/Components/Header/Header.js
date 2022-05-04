import { AppBar, Avatar, Container, Tab, Tabs, Toolbar } from "@mui/material";
import logo from "../../Assets/logo.png";
const Header = () => {
  return (
    <AppBar color="secondary">
      <Container maxWidth="md" color="secondary">
        <Toolbar disableGutters sx={{ padding: 3 }}>
          <Tabs>
            <Avatar
              src={logo}
              sx={{ cursor: "pointer" }}
              variant="square"
            ></Avatar>

            <Tab sx={{ fontSize: "1.8rem" }} label={"خانه"}></Tab>
            <Tab sx={{ fontSize: "1.8rem" }} label={"خدمات ما"}></Tab>
            <Tab sx={{ fontSize: "1.8rem" }} label={"درباره ما"}></Tab>
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
