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

// const SelectCityAndCountry = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
//   const navigate = useNavigate();
//   const [Country, setCountry] = useState("");
//   const [City, setCity] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     CandC();
//   }, [City, Country]);

//   const CandC = () => {
//     if (Country && City) {
//       const handleSubmit = () => {
//         const payload = {
//           Country,
//           City,
//         };
//         dispatch(CCaction(payload));
//         // navigate("/");
//       };

//       handleSubmit();
//     }
//   };

//   return (
//     <>
//       <Modal
//         isCentered
//         closeOnOverlayClick={false}
//         onClose={onClose}
//         isOpen={isOpen}
//         motionPreset="slideInBottom"
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader ml={12}>Select your pickup country/city</ModalHeader>
//           <ModalBody>
//             <Box border={"1px solid black"} p={2}>
//               <select onChange={(e) => setCountry(e.target.value)}>
//                 <option value="">Select Country</option>
//                 <option value="America">America</option>
//                 <option value="India">India</option>
//                 <option value="Japan">Japan</option>
//                 <option value="Russia">Russia</option>
//                 <option value="Ukraine">Ukraine</option>
//               </select>
//             </Box>
//             <br />
//             <Box border={"1px solid black"} p={2}>
//               <select onChange={(e) => setCity(e.target.value)}>
//                 <option value="">Select City</option>
//                 <option value="Banglore">Banglore</option>
//                 <option value="Pune">Pune</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Nashik">Nashik</option>
//                 <option value="Chennai">Chennai</option>
//                 <option value="Hyderabad">Hyderabad</option>
//                 <option value="Chandigarh">Chandigarh</option>
//                 <option value="Kolkata">Kolkata</option>
//               </select>
//             </Box>
//           </ModalBody>
//           <ModalFooter>
//             <Button
//               disabled={(Country == "", City == "")}
//               colorScheme="green"
//               m={"auto"}
//               onClick={onClose}
//             >
//               CONFIRM
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };
