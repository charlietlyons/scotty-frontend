import React from "react";
import Frame from "../common/frame/Frame";
import Paper from "@mui/material/Paper";

import testImage from "/public/test-cameron.jpg";

const Featured = (props) => {
  return (
    <Frame>
      <img src={testImage} style={{
        position: "fixed",
        top: "56%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
        width: "100%",
        height: "100%",
        objectFit: "scale-up",
        }}>
        </img>
        <Paper sx={{
            position: "absolute",
            top: "75%",
            left: "65%",
            fontSize: "2rem",
            color: "primary.main",
            padding: "1rem",
        }}>
            Buy stuff from us!
            {props.children}
        </Paper>
    </Frame>
    
  );
};

export default Featured;
