import { Grid, Typography } from "@mui/material";

const LandingLeft = () => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "secondary.main", height: "100vh" }}
    >
      <Grid item>
        <Typography variant="h1" fontFamily="sacramento" color="primary.main">
          Natayra Santos
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" color="primary.main" letterSpacing={3} mt={2}>
          Software Developer
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LandingLeft;
