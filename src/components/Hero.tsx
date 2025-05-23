import Grid from "@mui/material/Unstable_Grid2";
import Natayra from "../assets/nata.jpg";
import { Avatar, Button, Typography } from "@mui/material";
import CatOnLaptop from "../assets/cat_laptop.gif";
import { theme } from "../utils/theme";

const Hero = () => {
  return (
    <Grid container width="85%" justifyContent="space-between">
      <Grid
        container
        xs={12}
        md={5}
        pr="2.5%"
        flexDirection="column"
        justifyContent="flex-start"
        rowGap={4}
      >
        <Grid xs={12}>
          <Avatar
            src={Natayra}
            alt="Natayra"
            sx={{ width: "8rem", height: "8rem" }}
          />
          <Typography variant="h5" mt={2} color="grey.500">
            Natayra Santos
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h3">
            Hi! I'm Natayra. Your Frontend Developer.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Button variant="contained">Get in touch</Button>
        </Grid>
      </Grid>
      <Grid xs={12} md={6} xl={5}  pl="2.5%">
        <img
          src={CatOnLaptop}
          alt="CatOnLaptop"
          style={{ width: "90%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
