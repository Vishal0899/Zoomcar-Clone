import React from "react";
import { Button, FormControl, Input, Box, Image, Flex } from "@chakra-ui/react";
import { FcExpand } from "react-icons/fc";
import { ReferAndEarn } from "./ReferAndEarn";
import { Promo } from "./Promo";
import { Offers } from "./Offers";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectCityAndCountry } from "../SelectCityAndCountry/SelectCityAndCountry";
import { useEffect } from "react";

export const HomePage = () => {
  let navigate = useNavigate();
  const Country = useSelector((state) => state.CCreducer.Country);
  const City = useSelector((state) => state.CCreducer.City);
  const address = useSelector((state) => state.CCreducer.address);
  const DateTime = useSelector((state) => state.DTreducer);

  return (
    <>
      {Country === "" && City === "" ? (
        <Navigate to={"/CityAndCountry"} />
      ) : (
        <Box>
          <Box style={{ position: "relative"}}>
            <Box>
              <Image
                src="https://as2.ftcdn.net/v2/jpg/03/19/09/05/1000_F_319090537_bZ9Nm7GvQP5LXcJi5Fam1P8gj8dWz1TQ.jpg"
                w={"100%"}
                h="580px"
              />
            </Box>
            <FormControl w={"40%"} position={"absolute"} top="30%" left={"54%"}>
              <Flex onClick={() => navigate("/CityAndCountry")}>
                <Box textAlign="left" fontSize="larger" mb={"5px"} mr={"5px"}>
                  Round Trip
                </Box>
                <FcExpand style={{ marginTop: "8px" }} />
              </Flex>
              <Button
                onClick={() => navigate("/searchLocation")}
                bg="white"
                w={"full"}
                border="1px solid grey"
                mb={2}
              >
                {address !== ""
                  ? `${address}`
                  : "Pick Up City, Airport, Address or Hotel"}
              </Button>
              <Button
                w={"full"}
                onClick={() => navigate("/DateAndTime")}
                mb={2}
              >
                {DateTime.sDateAndTime == "" ? "Choose Trip Dates" : `${DateTime.sDateAndTime} ------->  ${DateTime.rDateAndTime}`}
              </Button>
              <Button
                bg="#34ec53"
                w={"full"}
                onClick={() => navigate("/carsPage")}
                style={{color : "white"}}
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
      )}
    </>
  );
};
