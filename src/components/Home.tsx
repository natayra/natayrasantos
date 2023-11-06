import { Grid } from "@mui/material";
import LandingLeft from "./LandingLeft.tsx";
import ImagesComponent from "./ImagesComponent.tsx";
import HorizontalScrollComponent from "./HorizontalScrollComponent.tsx";

const Home = () => {
  return (
    <Grid container>
      <Grid container item>
        <Grid item xs={6}>
          <LandingLeft />
        </Grid>
      </Grid>
      <Grid item>
        <ImagesComponent />
      </Grid>
      <Grid item pt={10} xs={12}>
        <HorizontalScrollComponent/>
      </Grid>
    </Grid>
  );
};

export default Home;
