import { Grid } from "@mui/material";
import Hero from "./Hero.tsx";
import ImagesComponent from "./ImagesComponent.tsx";
import HorizontalScrollComponent from "./HorizontalScrollComponent.tsx";
import Header from "./Header.tsx";

const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        py={{ xs: "3rem", md: "4.5rem" }}
        pt={{ xl: 0 }}
        height="100vh"
      >
        <Hero />
      </Grid>
      <Grid item>
        <ImagesComponent />
      </Grid>
      <Grid item pt={10} xs={12}>
        <HorizontalScrollComponent />
      </Grid>
    </Grid>
  );
};

export default Home;
