import {Button, Grid} from "@mui/material";

const Header = () => {
  return (
    <Grid container item justifyContent="center">
      <Grid item>
        <Button variant="text">Home</Button>
      </Grid>
      <Grid item>
        <Button variant="text">About me</Button>
      </Grid>
      <Grid item>
        <Button variant="text">Portfolio</Button>
      </Grid>
      <Grid item>
        <Button variant="text">Contact</Button>
      </Grid>
    </Grid>
  );
};
export default Header
