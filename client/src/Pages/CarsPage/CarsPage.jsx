import { Box, Flex, Image, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";

export const CarsPage = () => {
  const navigate = useNavigate();
  const address = useSelector((state) => state.Lreducer.address);
  const DateTime = useSelector((state) => state.DTreducer);
  const city = useSelector((state) => state.CCreducer.City);
  const [data, setData] = useState({});

  // console.log(data);

  useEffect(() => {
    axios
      .get("https://cloned-zoomcar.herokuapp.com/Cars")
      .then((res) => setData(res.data.data[0].Cars[0]))
      .catch((err) => console.log(err));
  }, []);

  const handleBook = () => {
    alert("Booking Confirmed 😊");
    navigate("/");
  };

  return (
    <Box>
      <Box w="58%" m={"auto"} mt={"10px"}>
        <Flex justifyContent="space-between">
          <Button
            onClick={() => navigate("/searchLocation")}
            bg="white"
            w={"45%"}
            border="1px solid green"
            mb={2}
          >
            {address}
          </Button>
          <Button
            w={"45%"}
            onClick={() => navigate("/DateAndTime")}
            mb={2}
            bg="white"
            border={"1px solid green"}
          >
            {DateTime.sDateAndTime}
            <BsArrowRight style={{ marginLeft: "20px", marginRight: "20px" }} />
            {DateTime.rDateAndTime}
          </Button>
        </Flex>
      </Box>
      <Box w="60%" m="auto" p={3}>
        {Object.keys(data).map((elem) => {
          if (elem == city) {
            return data[elem].map((e) => (
              <Box mb={3} key={e.id}>
                <Flex
                  justifyContent="space-between"
                  border="1px solid black"
                  p={3}
                >
                  <Box w="60%" p={4}>
                    <Box fontSize="large" fontWeight="bold">
                      {e.name}
                    </Box>
                    <Box>{e.type}</Box>
                    <Flex>
                      <Box mr={2} mt={1}>
                        <AiFillStar />
                      </Box>
                      <Box>{e.rating}</Box>
                    </Flex>
                    <Box color="green" fontWeight="bold">
                      {e.price}
                    </Box>
                    <Box mt={10}>
                      <Button bg="green" color="white" onClick={handleBook}>
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                  <Box w="40%">
                    <Image src={e.image} />
                  </Box>
                </Flex>
              </Box>
            ));
          }
        })}
      </Box>
    </Box>
  );
};
