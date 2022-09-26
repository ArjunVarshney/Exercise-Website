import { Box } from "@mui/material";
import React from "react";

const Details = (exerciseDetail) => {
  const { bodyPart, name, gifUrl, id, target, equipment } =
    exerciseDetail.exerciseDetail;
  return (
    <Box>
      <img src={gifUrl} alt="" />
      <div>{name}</div>
      <div>{bodyPart}</div>
      <div>{target}</div>
      <div>{equipment}</div>
    </Box>
  );
};

export default Details;
