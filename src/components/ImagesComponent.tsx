import { Grid } from "@mui/material";
import Image1 from "../assets/11.png";
import Image2 from "../assets/20.png";
import Image3 from "../assets/21.webp";
import Image4 from "../assets/24.webp";
import Image5 from "../assets/36.jpeg";

const ImagesComponent = () => {
  return (
    <Grid item xs={12} className="imagesContainer">
      <img src={Image1} alt="image1" className="images" />
      <img src={Image2} alt="image2" className="images" />
      <img src={Image3} alt="image3" className="images" />
      <img src={Image4} alt="image4" className="images" />
      <img src={Image5} alt="image5" className="images" />
    </Grid>
  );
};
export default ImagesComponent;

