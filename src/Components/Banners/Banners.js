import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import VISA from "../../Assets/VISA.png";
const Banners = () => {
  return (
    <Grid
      container
      sx={{ mx: "auto" }}
      // justifyContent="center"
      // alignItems="stretch"
      maxWidth="lg"
    >
      <Grid container item xs>
        <Grid item xs="3" sx={{ backgroundColor: "black" }}>
          1
        </Grid>
        <Grid item xs="9" sx={{ backgroundColor: "green" }}>
          2
        </Grid>
        <Grid item xs="9" sx={{ backgroundColor: "brown" }}>
          3
        </Grid>
        <Grid item xs="3" sx={{ backgroundColor: "pink" }}>
          4
        </Grid>
      </Grid>
      <Grid item xs="3">
        <Card
          sx={{
            maxWidth: "100%",
            height: "60rem",
            textAlign: "center",
            m: 1,
            backgroundColor: "#98c1d9",
          }}
          centered
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardContent>
              <Typography>کارت اعتباری ارزی</Typography>
              <Typography>VISA</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={VISA}
              sx={{ width: "17rem", mx: "auto" }}
            />
            <Button size="large">مشاهده و خرید</Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Banners;
