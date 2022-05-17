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
            // backgroundColor: "#9ff0ff",
          }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              image={DISNEY}
              sx={{ width: "17rem", mx: "auto" }}
            />
            <CardContent>
              <Typography> اشتراک سرویس های فیلم و سریال</Typography>
              <Typography> DISNEY+ </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box gridColumn="4/10">
        <Card
          sx={{
            textAlign: "center",
            height: "100%",
            // backgroundColor: "#9ff0ff",
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
              <Typography> تخفیف ویژه</Typography>
              <Typography>اکانت پریمیوم سرویس NETFLIX </Typography>
              <Button size="large">مشاهده و خرید</Button>
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
            maxWidth: "100%",
            height: "60rem",
            textAlign: "center",
            backgroundColor: "#9ff0ff",
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
      </Box>
      <Box gridColumn="1/7">
        <Card
          sx={{
            textAlign: "center",
            height: "100%",
            // backgroundColor: "#9ff0ff",
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
              <Typography> تخفیف ویژه</Typography>
              <Typography> پریمیوم سازی اکانت Spotify</Typography>
              <Button size="large">مشاهده و خرید</Button>
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
            // backgroundColor: "#9ff0ff",
          }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              image={APPLE_MUSIC}
              sx={{ width: "17rem", mx: "auto" }}
            />
            <CardContent>
              <Typography> Apple Music </Typography>
              <Typography> اشتراک پریمیوم اپل موزیک</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Banners;
