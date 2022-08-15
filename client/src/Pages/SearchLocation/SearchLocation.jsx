import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { BsMap } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Laction } from "../../Redux/SelectLocationR/action";
import { CCaction } from "../../Redux/SelectCityAndCountryR/action";
import { useCookies } from "react-cookie";

export const SearchLocation = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  let navigate = useNavigate();
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const Country = useSelector((state) => state.CCreducer.Country);
  const City = useSelector((state) => state.CCreducer.City);
  const [city, setCity] = useState("");
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
      console.log(res);
      setCookie("City", res.features[0].properties.city);
      setCookie("Country", res.features[0].properties.country);
      setAddress(
        res.features[0].properties.address_line1 +
          " " +
          res.features[0].properties.address_line2
      );
      setCity(res.features[0].properties.city);
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
    const payload1 = {
      address: address,
    };
    if (city != City || cookies.City) {
      alert(
        `Your selected address is in a different city than your currently selected city (${cookies.City}). We are updating you current city.`
      );
      const payload2 = {
        Country,
        City,
      };
      setCookie("Address", address);
      dispatch(CCaction(payload2));
      dispatch(Laction(payload1));
    } else {
      setCookie("Address", address);
      dispatch(Laction(payload1));
    }
    navigate("/");
    window.location.reload();
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
      <Box w="75%" m="auto" p={10}>
        <Flex>
          <Box w={"60%"}>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              value={address ? address : ""}
              placeholder="Select your starting point"
              width="100%"
              h="50px"
            />
          </Box>
          <Flex w={"20%"} ml="20px" mt="10px" onClick={handleAddress}>
            <Box w={"30%"}>
              <TbCurrentLocation style={{ fontSize: "30" }} />
            </Box>
            <Box>Current Location</Box>
          </Flex>
          <Flex w={"20%"} mt={"10px"} ml="20px">
            <Box w={"30%"} mt={"5px"}>
              <BsMap style={{ fontSize: "20" }} />
            </Box>
            <Box>Select Location on Map</Box>
          </Flex>
        </Flex>
        <Box mt="50px" ml="5%">
          <Button
            h="60px"
            w="100%"
            bg="#30e32a"
            color="white"
            onClick={handleConfirm}
            disabled={address == ""}
          >
            CONFIRM PICKUP LOCATION
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
