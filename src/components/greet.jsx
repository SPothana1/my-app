import React from "react";
import useTitle from "../hooks/useTitle";
import { Typography } from "@mui/material";

const Greet = ({ name }) => {
  useTitle("Greet User");
  return (
    <Typography variant="h4" gutterBottom>
      Welcome,{" "}
      <Typography
        component={"span"}
        variant="subtitle2"
        gutterBottom
        sx={{ color: "green" }}
      >
        {name}
      </Typography>
    </Typography>
  );
};

export default Greet;
