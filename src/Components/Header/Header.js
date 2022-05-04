import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import logo from "../../Assets/logo.png";

const MyTab = styled(Tab)({
  fontSize: "1.8rem",
  margin: 10,
});

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ padding: 3 }}>
          <Tabs>
            <Avatar
              src={logo}
              sx={{ cursor: "pointer", width: 70, height: 70 }}
              variant="square"
            ></Avatar>

            <MyTab label={"خانه"}></MyTab>
            <MyTab label={"خدمات ما"}></MyTab>
            <MyTab label={"درباره ما"}></MyTab>
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
            <Button color="white" sx={{ fontSize: 18 }} label="حساب کاربری">
              حساب کاربری
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
