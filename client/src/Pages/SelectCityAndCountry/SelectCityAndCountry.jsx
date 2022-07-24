import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CCaction } from "../../Redux/SelectCityAndCountry/action";
import { useDispatch } from "react-redux";

export const SelectCityAndCountry = () => {
  return (
    <div>
      <TransitionExample />
    </div>
  );
};

const TransitionExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const navigate = useNavigate();
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const payload = {
      Country,
      City,
    };
    dispatch(CCaction(payload));
    navigate("/");
  };

  return (
    <>
      {/* <Button ml="45%" mt="10%" onClick={onOpen}>
        Select City/Country
      </Button> */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml={12}>Select your pickup country/city</ModalHeader>
          <ModalBody>
            <Box border={"1px solid black"} p={2}>
              <select onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select Country</option>
                <option value="America">America</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Russia">Russia</option>
                <option value="Ukraine">Ukraine</option>
              </select>
            </Box>
            <br />
            <Box border={"1px solid black"} p={2}>
              <select onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                <option value="Banglore">Banglore</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nashik">Nashik</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" m={"auto"} onClick={handleSubmit}>
              CONFIRM
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
