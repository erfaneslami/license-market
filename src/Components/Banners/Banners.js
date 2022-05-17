import { Box } from "@mui/material";
import VISA from "../../Assets/VISA.png";

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
      <Box gridColumn="1/4" bgcolor="red">
        1
      </Box>
      <Box gridColumn="4/10" bgcolor="blue">
        2
      </Box>
      <Box gridColumn="10/13" gridRow="1/-1" bgcolor="brown">
        3
      </Box>
      <Box gridColumn="1/7" bgcolor="black">
        4
      </Box>
      <Box gridColumn="7/10" bgcolor="pink">
        5
      </Box>
    </Box>
  );
};

export default Banners;

{
  /* <Card
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
</Card> */
}
