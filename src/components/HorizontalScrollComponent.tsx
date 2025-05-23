import { Button, Grid, Typography } from "@mui/material";
import Image1 from "../assets/11.png";
import Image2 from "../assets/20.png";
import Image3 from "../assets/21.webp";
import Image4 from "../assets/24.webp";
import Image5 from "../assets/36.jpeg";
import Cookies from "../assets/Cookies";
import { useEffect, useState } from "react";

const HorizontalScrollComponent = () => {
  const [catFact, setCatFact] = useState("");
  const [newFact, setNewFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((md) => {
        setCatFact(md.fact);
      });
  }, [newFact]);

  const handleClick = () => {
    setNewFact(catFact);
  };

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      className="imagesContainer"
    >
      <Grid item textAlign="center">
        <Cookies />
        <Typography variant="h1">Horizontal Scrolling</Typography>
      </Grid>
      <Grid item className="horizontalImagesContainer" id="scrollableElement">
        <img src={Image1} alt="image1" className="imagesHorizontal" />
        <img src={Image2} alt="image2" className="imagesHorizontal" />
        <img src={Image3} alt="image3" className="imagesHorizontal" />
        <img src={Image4} alt="image4" className="imagesHorizontal" />
        <img src={Image5} alt="image6" className="imagesHorizontal" />
        <img src={Image1} alt="image7" className="imagesHorizontal" />
        <img src={Image2} alt="image8" className="imagesHorizontal" />
        <img src={Image3} alt="image9" className="imagesHorizontal" />
        <img src={Image4} alt="image10" className="imagesHorizontal" />
        <img src={Image5} alt="image11" className="imagesHorizontal" />
      </Grid>
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        m={10}
        spacing={3}
      >
        <Grid item textAlign="center">
          <Typography variant="h1">Cat fact</Typography>
        </Grid>
        <Grid item textAlign="center">
          <Button variant="contained" onClick={handleClick}>
            Tell me a cat fact
          </Button>
        </Grid>
        <Grid item textAlign="center">
          <Typography variant="h3">{catFact}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HorizontalScrollComponent;
