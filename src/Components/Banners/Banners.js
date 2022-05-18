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
      mt={5}
      display="grid"
      maxWidth="lg"
      px={3}
      mx="auto"
      gridTemplateColumns="repeat(12,1fr)"
      gridTemplateRows={{ md: "repeat(2,1fr)", sm: "auto" }}
      gap={2}
    >
      <Box gridColumn={{ md: "1/4", sm: "1/7" }}>
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
              <Typography variant="subtitle1" mb={2}>
                اشتراک سرویس های فیلم و سریال
              </Typography>
              <Typography variant="h2"> DISNEY+ </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box gridColumn={{ md: "4/10", sm: "7/13" }}>
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
              flexDirection: { md: "initial", sm: "column-reverse" },
              alignItems: "center",
              justifyContent: "space-around",
              padding: { md: "0 2rem", sm: "2rem" },
            }}
          >
            <CardContent sx={{ textAlign: { md: "right" } }}>
              <Typography variant="subtitle1"> تخفیف ویژه</Typography>
              <Typography variant="h2" mb={3}>
                اکانت پریمیوم سرویس NETFLIX{" "}
              </Typography>
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
      <Box
        gridColumn={{ md: "10/13", sm: "1/13" }}
        gridRow={{ md: "1/-1", sm: "auto" }}
      >
        <Card
          sx={{
            height: { md: "60rem", sm: "auto" },
            textAlign: "center",
            backgroundColor: "#e2eafc ",
          }}
        >
          <CardActionArea
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: { md: "5rem 0 " },
            }}
          >
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
      <Box gridColumn={{ sm: "1/7" }} gridRow={{ md: "auto ", sm: "2/3" }}>
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
              flexDirection: { md: "initial", sm: "column-reverse" },
              padding: { md: 0, sm: 2 },
              justifyContent: "space-around",
            }}
          >
            <CardContent>
              <Typography variant="subtitle1"> تخفیف ویژه</Typography>
              <Typography variant="h2" mb={3}>
                پریمیوم سازی اکانت Spotify
              </Typography>
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
      <Box
        gridColumn={{ md: "7/10", sm: "7/13" }}
        gridRow={{ md: "auto ", sm: "2/3" }}
      >
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
              <Typography variant="subtitle1" mb={1}>
                {" "}
                Apple Music{" "}
              </Typography>
              <Typography variant="h2"> اشتراک پریمیوم اپل موزیک</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Banners;
