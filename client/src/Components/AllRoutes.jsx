import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarsPage } from "../Pages/CarsPage/CarsPage";
import { HomePage } from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/PrivateRoute/Login";
import { Password } from "../Pages/PrivateRoute/Password";
import { SearchLocation } from "../Pages/SearchLocation/SearchLocation";
import { SelectCC } from "../Pages/SelectCC/SelectCC";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchLocation" element={<SearchLocation />} />
      <Route path="/selectCity" element={<SelectCC />} />
      <Route path="/carsPage" element={<CarsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login_password" element={<Password/>}/>
    </Routes>
  );
};
