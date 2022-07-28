import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  Box,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FcExpand } from "react-icons/fc";
import { ReferAndEarn } from "./ReferAndEarn";
import { Promo } from "./Promo";
import { Offers } from "./Offers";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CCaction } from "../../Redux/SelectCityAndCountryR/action";
import { SelectCityAndCountry } from "../SelectCityAndCountry/SelectCityAndCountry";

export const HomePage = () => {
  let navigate = useNavigate();
  const Country = useSelector((state) => state.CCreducer.Country);
  const City = useSelector((state) => state.CCreducer.City);
  const address = useSelector((state) => state.Lreducer.address);
  const DateTime = useSelector((state) => state.DTreducer);

  return (
    <>
      {Country === "" && City === "" ? (
        <SelectCityAndCountry />
      ) : (
        ""
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
              border={"1px solid grey"}
            >
              {DateTime.sDateAndTime == ""
                ? "Choose Trip Dates"
                : `${DateTime.sDateAndTime} ------->  ${DateTime.rDateAndTime}`}
            </Button>
            <Button
              bg="#34ec53"
              w={"full"}
              onClick={() => navigate("/carsPage")}
              style={{ color: "white" }}
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
