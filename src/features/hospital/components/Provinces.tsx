import React, { useEffect, useState } from "react";
import {
  getProvinces,
  selectProvinces,
  getCities,
  selectCities,
  getHospitals,
  selectHospitals,
  ProvinceModel,
  CityModel,
  RoomModel,
} from "../";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  Box,
  Grid,
  MenuItem,
  FormControl,
  Typography,
  Stack,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Hospital from "../Hospital";
import HospitalCard from "./HospitalCard";

const Provinces = () => {
  const [selectedProv, setSelectedProv] = useState("31prop");
  const [selectedCity, setSelectedCity] = useState("3173");
  const [type, setType] = useState("1");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProvinces());
  }, [dispatch]);

  const provinces: Array<ProvinceModel> | null =
    useAppSelector(selectProvinces);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProv(event.target.value as string);
  };

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value as string);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  useEffect(() => {
    dispatch(getCities(selectedProv));
  }, [dispatch, selectedProv]);

  const cities: Array<CityModel> | null = useAppSelector(selectCities);

  useEffect(() => {
    dispatch(
      getHospitals({
        provId: selectedProv,
        cityId: selectedCity,
        type: type,
      })
    );
  }, [dispatch, selectedCity, selectedProv, type]);

  const hospitals: Array<RoomModel> | null = useAppSelector(selectHospitals);

  if (!provinces)
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );

  return (
    <Box>
      <Typography>Provinces</Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <Typography>Provinsi</Typography>
            <Select value={selectedProv} onChange={handleChange}>
              {provinces?.map((el, index) => (
                <MenuItem key={index} value={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          {cities && cities.length > 0 ? (
            <FormControl fullWidth>
              <Typography>Kota</Typography>
              <Select value={selectedCity} onChange={handleCityChange}>
                {cities?.map((el, index) => (
                  <MenuItem key={index} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {selectedCity.length > 2 ? (
            <FormControl fullWidth>
              <Typography>Tipe</Typography>
              <Select value={type} onChange={handleTypeChange}>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
              </Select>
            </FormControl>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <>
        {hospitals && hospitals.length > 0 ? (
          hospitals.map((el, index) => (
            <HospitalCard hospital={el} key={index} />
          ))
        ) : (
          <h1>no hospital</h1>
        )}
      </>
    </Box>
  );
};

export default Provinces;
