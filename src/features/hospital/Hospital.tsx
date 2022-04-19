import React from "react";
import { Box, Typography } from "@mui/material";
import Provinces from "./components/Provinces";

const Hospital = () => {
  return (
    <Box>
      <Typography>Hospital List</Typography>
      <Provinces />
    </Box>
  );
};

export default Hospital;
