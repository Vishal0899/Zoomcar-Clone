import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { BsMap } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Laction } from "../../Redux/SelectLocationR/action";

export const SearchLocation = () => {
  let navigate = useNavigate();
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const Country = useSelector((state) => state.CCreducer.Country);
  const City = useSelector((state) => state.CCreducer.City);
  //******************************************* */
  const successCallback = (position) => {
    // console.log(position);
    async function address() {
      let data = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=04c1ed087a65412a8ef137ec2164bf33`
      );
      let res = await data.json();
      console.log(
        res.features[0].properties.address_line1,
        res.features[0].properties.address_line2
      );
      setAddress(
        res.features[0].properties.address_line1 +
          " " +
          res.features[0].properties.address_line2
      );
    }
    address();
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const handleAddress = () => {
    const watchId = navigator.geolocation.watchPosition(
      successCallback,
      errorCallback
    );
  };
  // ***************************************
  const handleConfirm = () => {
    const payload = {
      address: address,
    };
    dispatch(Laction(payload));
    navigate("/");
  };
  return (
    <Box>
      <Box>
        <Flex>
          <BsArrowLeft
            onClick={() => navigate("/")}
            style={{ marginTop: "25px", marginLeft: "10px", fontSize: "30px" }}
          />
        </Flex>
      </Box>
      <Box w="75%" m="auto" p={20}>
        <Flex>
          <Box>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              value={address ? address : ""}
              placeholder="Select your starting point"
              width="450px"
              h="50px"
            />
          </Box>
          <Flex ml="20px" mt="10px" onClick={handleAddress}>
            <TbCurrentLocation style={{ fontSize: "33px" }} />
            <Box ml="10px">Current Location</Box>
          </Flex>
          <Flex ml="20px" mt="10px">
            <BsMap style={{ fontSize: "27px" }} />
            <Box ml="10px">Select Location on Map</Box>
          </Flex>
        </Flex>
        <Box mt="50px" ml="20%">
          <Button
            h="60px"
            w="500px"
            bg="#30e32a"
            color="white"
            onClick={handleConfirm}
          >
            CONFIRM PICKUP LOCATION
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
