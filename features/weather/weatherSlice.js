import { cityCordinates, weatherData } from "../../config/api";
import * as Constant from "../../constants/weather";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    const res = await axios(cityCordinates(cityName));
    return res.data.coord;
  }
);

export const getWeatherData = createAsyncThunk(
  "weather/getWeatherData",
  async (geoLocation, thunkAPI) => {
    let lat, lon;
    if (geoLocation) {
      // This is for geo location button on sidebar
      lat = geoLocation.lat;
      lon = geoLocation.lon;
    } else {
      lat = thunkAPI.getState().weather.coords.lat;
      lon = thunkAPI.getState().weather.coords.lon;
    }
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
