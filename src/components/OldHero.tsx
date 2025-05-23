import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image1 from "../assets/11.png";
import Image2 from "../assets/20.png";
import Image3 from "../assets/21.webp";
import Image4 from "../assets/24.webp";
import Image5 from "../assets/36.jpeg";

const OldHero = () => {
  const cellCount = 6;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [angle, setAngle] = useState(0);
  const transform = "translateZ(-187px) rotateY(" + angle + "deg)";

  useEffect(() => {
    setAngle((selectedIndex / cellCount) * -360);
  }, [selectedIndex, angle]);

  const handleScroll = (e: any) => {
    setSelectedIndex(selectedIndex + 1);
  };

  return (
    <Box className="scene">
      <div
        id="carousel"
        onMouseUp={handleScroll}
        style={{ transform: transform }}
      >
        <Box
          className="carousel__cell"
          sx={{ width: { xs: "40vw", md: "28vw" } }}
          id="one"
        >
          <img src={Image4} alt="image1" className="imagesCarousel" />
          <div className="cardTextContainer">
            <Typography
              className="cursor"
              variant="h2"
              mx={2}
              sx={{ WebkitTextStroke: "0.15rem #8a2be2", fontWeight: 800 }}
            >
              Natayra Santos
            </Typography>
          </div>
        </Box>
        <Box
          className="carousel__cell"
          sx={{ width: { xs: "40vw", md: "28vw" } }}
          id="two"
        >
          <img src={Image2} alt="image2" className="imagesCarousel" />
          <div className="cardTextContainer">
            <Typography
              variant="h2"
              mx={2}
              sx={{ WebkitTextStroke: "0.15rem #8a2be2", fontWeight: 800 }}
            >
              Frontend Developer
            </Typography>
          </div>
        </Box>
        <Box
          className="carousel__cell"
          sx={{ width: { xs: "40vw", md: "28vw" } }}
          id="three"
        >
          <img src={Image5} alt="image3" className="imagesCarousel" />
          <div className="cardTextContainer">
            <Typography
              variant="h2"
              mx={2}
              sx={{ WebkitTextStroke: "0.15rem #8a2be2", fontWeight: 800 }}
            >
              Natayra Santos
            </Typography>
          </div>
        </Box>
        <Box
          className="carousel__cell"
          sx={{ width: { xs: "40vw", md: "28vw" } }}
          id="four"
        >
          <img src={Image4} alt="image4" className="imagesCarousel" />
          <div className="cardTextContainer">
            <Typography
              variant="h2"
              mx={2}
              sx={{ WebkitTextStroke: "0.15rem #8a2be2", fontWeight: 800 }}
            >
              Frontend Developer
            </Typography>
          </div>
        </Box>
      </div>
      <Box
        className="glowing"
        sx={{ height: { md: "14.5vw", lg: "11.5vw", xl: "10.5vw" } }}
      />
    </Box>
  );
};

export default OldHero;
