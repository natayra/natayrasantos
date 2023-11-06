import { Grid, Typography } from "@mui/material";
import Header from "./Header.tsx";
import { useState } from "react";

const LandingRight = () => {
  /* window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.documentElement.scrollTop > 5) {
      document.getElementById("header").style["background-size"] = "100%";
      document.getElementById("header").style.height = "200px";
    } else {
      document.getElementById("header").style["background-size"] = "150%";
      document.getElementById("header").style.height = "300px";

    }
  }*/

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-between"
      px="8%"
      py="5%"
      height="100%"
    >
      <Header />
      <Grid item>
        {/* <div>
          <div>
            <p>Search</p>
          </div>
          <div id="header" />
          <div>
            <p>Title</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>*/}
        <Typography variant="h4" fontWeight="500" mb={2}>
          Welcome
        </Typography>
        <Typography variant="h6" textAlign="justify">
          I am Natayra, a dedicated professional with diverse experiences,
          committed to excellence. I have journeyed from Brazil to Portugal,
          settling in Switzerland, demonstrating adaptability and a pursuit of
          growth. I stand out for transforming creative concepts into tangible
          achievements through design, problem-solving, and project execution,
          fostering a positive work environment with meticulous attention to
          detail. My dedication to self-improvement is evident in both my
          personal and professional life.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">natayras@gmail.com</Typography>
        <Typography variant="h6">+41 76 433 20 29</Typography>
      </Grid>
    </Grid>
  );
};

export default LandingRight;
