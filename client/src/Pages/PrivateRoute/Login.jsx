import {
  Box, Flex, Image, Input, Button, useDisclosure, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AuthAction } from "../../Redux/Auth/action";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Number: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlelogin = () => {
    axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        console.log(res.data.user)
        dispatch(AuthAction(res.data.user));
        navigate("/");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Box>
      <Box p={8} w="40%" m={"auto"} mt={5}>
        <Box w="70%" m="auto">
          <Image
            src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
            w={"100%"}
          />
        </Box>
        <Box w={"73%"} m={"auto"} mt={"15px"} p={2}>
          <Box fontSize={"lg"} fontWeight={"bold"} mb="20px">
            Enter details to login/sign-up
          </Box>
          <Box>
            <Flex mb={3}>
              <Flex mt={2}>
                <Box w={7} mt="2px">
                  <Image src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648" />
                </Box>
                <Box mr={2}>+91</Box>
              </Flex>
              <Box borderLeft="1px solid black">
                <LoGin handleChange={handleChange} handlelogin={handlelogin} />
              </Box>
            </Flex>
            <hr />
            <Box mb={3} mt={3}>
              <a href="">Continue With Email ID</a>
            </Box>
            <hr />
            <Flex mt={3}>
              <Box mr={2} mt="3px">
                <a href="">Continue via Social</a>
              </Box>
              <Box mr={2}>
                <Image src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg" />
              </Box>
              <Box>
                <Image src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

//************************************   Login Popup  ******************************************** */

const LoGin = ({ handleChange, handlelogin }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        style={{ marginLeft: "20px", backgroundColor: "white", color: "grey" }}
      >
        Enter Mobile Number
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="number"
                name="Number"
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="Password"
                onChange={handleChange}
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              style={{ backgroundColor: "#34ec53", color: "white" }}
              onClick={handlelogin}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// const LoGin = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   const initialRef = React.useRef(null)
//   const finalRef = React.useRef(null)

//   return (
//     <>
//       <Button onClick={onOpen} style={{marginLeft : "20px", backgroundColor : "white", color : "grey"}} >Enter Mobile Number</Button>

//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>First name</FormLabel>
//               <Input ref={initialRef} placeholder='First name' />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Last name</FormLabel>
//               <Input placeholder='Last name' />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             {/* <Button colorScheme='blue' mr={3}>
//               Save
//             </Button> */}
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }
