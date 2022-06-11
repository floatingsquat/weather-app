import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, cityCordinates, weatherData } from "../../config/api";
import axios from "axios";
import * as Constant from "../../constants/weather";
const initialState = {
  searchQuery: Constant.DEFAULT_SEARCH_QUERY,
  coords: [],
  items: [],
  prevSearchedItems: ["istanbul", "london"],
  isLoading: [],
  tempUnit: Constant.DEFAULT_TEMPERATURE_UNITS.celsius,
};

export const getCoordinates = createAsyncThunk(
  "weather/getCoordinates",
  async (cityName) => {
    console.log("getCoordinates async request");
    const res = await axios(cityCordinates(cityName));
    return res.data.coord;
  }
);

export const getWeatherData = createAsyncThunk(
  "weather/getWeatherData",
  async (test, thunkAPI) => {
    const lat = thunkAPI.getState().weather.coords.lat;
    const lon = thunkAPI.getState().weather.coords.lon;
    console.log("getWeatherData async request", lat, lon);
    const res = await axios(weatherData(lat, lon));

    return res.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setTempUnit: (state, action) => {
      state.tempUnit = action.payload;
    },
    setPrevSearchedItems: (state, action) => {
      state.prevSearchedItems.push(action.payload);
    },
  },
  extraReducers: {
    // For fetching coordinates of the city that you've searched.
    [getCoordinates.pending]: (state) => {
      state.isLoading = true;
    },
    [getCoordinates.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.coords = action.payload;
      console.log(state.coords, " coords state'ine aktarıldı");
    },
    [getCoordinates.rejected]: (state) => {
      state.isLoading = false;
    },

    // For fetching full weather data of the city.
    [getWeatherData.pending]: (state) => {
      state.isLoading = true;
    },
    [getWeatherData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getWeatherData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setSearchQuery, setTempUnit, setPrevSearchedItems } =
  weatherSlice.actions;
export default weatherSlice.reducer;
