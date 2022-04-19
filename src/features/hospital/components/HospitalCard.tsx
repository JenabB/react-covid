import React, { FC } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { RoomModel } from "../";

interface CardProps {
  hospital: RoomModel;
}

const HospitalCard: FC<CardProps> = ({ hospital }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{hospital.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default HospitalCard;
