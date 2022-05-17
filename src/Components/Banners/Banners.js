import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import VISA from "../../Assets/VISA.png";
import NETFLIX from "../../Assets/netflix.png";
import DISNEY from "../../Assets/disney.png";
import APPLE_MUSIC from "../../Assets/appleMusic.png";
import SPOTIFY from "../../Assets/spotify.png";
const Banners = () => {
  return (
    <Box
      display="grid"
      maxWidth="lg"
      px={3}
      mx="auto"
      gridTemplateColumns="repeat(12,1fr)"
      gridTemplateRows="repeat(2,1fr)"
      gap={2}
    >
      <Box gridColumn="1/4">
        <Card
          sx={{
            textAlign: "center",
            height: "100%",
            backgroundColor: "#c2d5ff",
          }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              image={DISNEY}
              sx={{ width: "17rem", mx: "auto" }}
            />
            <CardContent>
              <Typography variant="subtitle1">
                اشتراک سرویس های فیلم و سریال
              </Typography>
              <Typography variant="h2"> DISNEY+ </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box gridColumn="4/10">
        <Card
          sx={{
            textAlign: "center",
            height: "100%",
            backgroundColor: "#ffccd5",
          }}
        >
          <CardActionArea
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <CardContent sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1"> تخفیف ویژه</Typography>
              <Typography variant="h2">اکانت پریمیوم سرویس NETFLIX </Typography>
              <Button variant="cta" size="large">
                مشاهده و خرید
              </Button>
            </CardContent>
            <CardMedia
              component="img"
              image={NETFLIX}
              sx={{ width: "17rem" }}
            />
          </CardActionArea>
        </Card>
      </Box>
      <Box gridColumn="10/13" gridRow="1/-1">
        <Card
          sx={{
            height: "60rem",
            textAlign: "center",
            backgroundColor: "#e2eafc ",
          }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle1">کارت اعتباری ارزی</Typography>
              <Typography variant="h2">VISA</Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={VISA}
              sx={{ width: "17rem", mx: "auto" }}
            />
            <Button variant="cta" size="large">
              مشاهده و خرید
            </Button>
          </CardActionArea>
        </Card>
      </Box>
      <Box gridColumn="1/7">
        <Card
          sx={{
            textAlign: "center",
            height: "100%",
            backgroundColor: "#c9e4d8",
          }}
        >
          <CardActionArea
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <CardContent>
              <Typography variant="subtitle1"> تخفیف ویژه</Typography>
              <Typography variant="h2"> پریمیوم سازی اکانت Spotify</Typography>
              <Button variant="cta" size="large">
                مشاهده و خرید
              </Button>
            </CardContent>
            <CardMedia
              component="img"
              image={SPOTIFY}
              sx={{ width: "17rem" }}
            />
          </CardActionArea>
        </Card>
      </Box>
      <Box gridColumn="7/10">
        <Card
          sx={{
            textAlign: "center",
            height: "100%",
            backgroundColor: "#fae0e4",
          }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              image={APPLE_MUSIC}
              sx={{ width: "17rem", mx: "auto" }}
            />
            <CardContent>
              <Typography variant="subtitle1"> Apple Music </Typography>
              <Typography variant="h2"> اشتراک پریمیوم اپل موزیک</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Banners;
