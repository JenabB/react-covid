import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getProvinces, getCities, getHospitals, HospitalModel } from "./";

const initialState: HospitalModel = {
  hospitals: [],
  provinces: [],
  cities: null,
};

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProvinces.fulfilled, (state: any, action) => {
      state.provinces = action.payload;
    });
    builder.addCase(getCities.fulfilled, (state: any, action) => {
      state.cities = action.payload;
    });
    builder.addCase(getHospitals.fulfilled, (state: any, action) => {
      state.hospitals = action.payload;
    });
  },
});

export const selectProvinces = (state: RootState) => state.hospital.provinces;
export const selectCities = (state: RootState) => state.hospital.cities;
export const selectHospitals = (state: RootState) => state.hospital.hospitals;

export default hospitalSlice.reducer;
