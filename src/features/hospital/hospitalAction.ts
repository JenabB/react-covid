import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProvinces = createAsyncThunk(
  "hospital/getProvinces",
  async () => {
    const response = await axios
      .get("https://rs-bed-covid-api.vercel.app/api/get-provinces")
      .then((res) => res.data.provinces);

    return response;
  }
);

export const getCities = createAsyncThunk(
  "hospital/getCities",
  async (provId: string) => {
    const response = await axios
      .get(
        `https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${provId}`
      )
      .then((res) => res.data.cities);
    return response;
  }
);

export const getHospitals = createAsyncThunk(
  "hospital/getHospitals",
  async (params: any) => {
    const response = await axios
      .get(
        `https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${params.provId}&cityid=${params.cityId}&type=${params.type}`
      )
      .then((res) => res.data.hospitals);

    return response;
  }
);
