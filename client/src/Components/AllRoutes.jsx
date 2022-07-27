import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarsPage } from "../Pages/CarsPage/CarsPage";
import { HomePage } from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/PrivateRoute/Login";
import { Register } from "../Pages/PrivateRoute/Register";
import { SearchLocation } from "../Pages/SearchLocation/SearchLocation";
import { SelectCityAndCountry } from "../Pages/SelectCityAndCountry/SelectCityAndCountry";
import { SelectDateAndTime } from "../Pages/SelectDateAndTime/SelectDateAndTime";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchLocation" element={<SearchLocation />} />
      <Route path="/CityAndCountry" element={<SelectCityAndCountry/>} />
      <Route path="/carsPage" element={<CarsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/DateAndTime" element={<SelectDateAndTime/>} />
    </Routes>
  );
};
