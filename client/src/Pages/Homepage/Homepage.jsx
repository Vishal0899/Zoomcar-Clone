import React, { useState } from "react";
import { Button, FormControl, Box, Image, Flex, Input } from "@chakra-ui/react";
import { FcExpand } from "react-icons/fc";
import { ReferAndEarn } from "./ReferAndEarn";
import { Promo } from "./Promo";
import { Offers } from "./Offers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectCityAndCountry } from "../SelectCityAndCountry/SelectCityAndCountry";
import { useCookies } from "react-cookie";

export const HomePage = () => {
  let navigate = useNavigate();
  const Country = useSelector((state) => state.CCreducer.Country);
  const City = useSelector((state) => state.CCreducer.City);
  const address = useSelector((state) => state.Lreducer.address);
  const DateTime = useSelector((state) => state.DTreducer);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  // console.log(cookies.Country, cookies.City);

  const checkLogin = () => {
    if (cookies.auth !== undefined) {
      navigate("/searchLocation");
    } else {
      alert("Login/Register your account");
      navigate("/login");
    }
  };
  console.log(cookies.Address)

  return (
    <>
      {(Country !== "" && City !== "") ||
      (cookies.Country !== undefined && cookies.City !== undefined) ? (
        ""
      ) : (
        <SelectCityAndCountry />
      )}
      <Box>
        <Box style={{ position: "relative" }}>
          <Box>
            <Image
              src="https://www.zoomcar.com/img/bg-desktop.png"
              w={"100%"}
              h="610px"
            />
          </Box>
          <FormControl w={"40%"} position={"absolute"} top="65%" left={"30%"}>
            <Flex onClick={() => navigate("/CityAndCountry")}>
              <Box textAlign="left" fontSize="larger" mb={"5px"} mr={"5px"}>
                Round Trip
              </Box>
              <FcExpand style={{ marginTop: "8px" }} />
            </Flex>
            <Button
              onClick={checkLogin}
              bg="white"
              w={"full"}
              border="1px solid grey"
              mb={2}
            >
              {cookies.Address !== undefined
                ? `${cookies.Address}`
                : "Pick Up City, Airport, Address or Hotel"}
            </Button>
            <Button
              w={"full"}
              bg="white"
              onClick={() => navigate("/DateAndTime")}
              mb={2}
              border={"1px solid grey"}
              // disabled={address == "" || cookies.Address == undefined}
            >
              {cookies.startDT == undefined
                ? "Choose Trip Dates"
                : `${DateTime.sDateAndTime || cookies.startDT} ------->  ${
                    DateTime.rDateAndTime || cookies.returnDT
                  }`}
            </Button>
            <Button
              bg="#34ec53"
              w={"full"}
              onClick={() => navigate("/carsPage")}
              style={{ color: "white" }}
              disabled={
                DateTime.sDateAndTime == "" || cookies.startDT == undefined && address == "" || cookies.Address == undefined
              }
            >
              FIND CARS
            </Button>
          </FormControl>
        </Box>
        <br />
        <br />
        <ReferAndEarn />
        <Promo />
        <br />
        <Offers />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};
