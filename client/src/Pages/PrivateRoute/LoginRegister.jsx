import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AuthAction } from "../../Redux/Auth/action";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const LoginRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userExist, setUserExist] = useState(false);
  const [isExist, setExist] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    setUserExist(!userExist);
  }, [isExist]);

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
      .post("https://cloned-zoomcar.herokuapp.com/login", user)
      .then((res) => {
        alert(res.data.message);
        setCookie("auth", true);
        setCookie("userName", res.data.user.Name);
        setCookie("userEmail", res.data.user.Email);
        setCookie("userNumber", res.data.user.Number);
        dispatch(AuthAction(res.data.user));
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        if (err.response.data.message == "Password not matched") {
          alert(err.response.data.message);
        } else {
          alert(`${err.response.data.message} please register`);
          setExist(!isExist);
        }
      });
  };

  const handleSignup = () => {
    axios
      .post("https://cloned-zoomcar.herokuapp.com/register", user)
      .then((res) => {
        alert(res.data.message);
        setCookie("auth", true);
        setCookie("userName", user.Name);
        setCookie("userEmail", user.Email);
        setCookie("userNumber", user.Number);
        console.log(res.status);
        dispatch(AuthAction(user));
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        if (err.response.data.message == "User already exist") {
          alert(`${err.response.data.message} please cheak details again`);
          setExist(!!isExist);
        }
      });
  };

  console.log(userExist);

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
                {userExist == true ? (
                  <LoGin
                    handleChange={handleChange}
                    handlelogin={handlelogin}
                  />
                ) : (
                  <Signup
                    handleChange={handleChange}
                    handleSignup={handleSignup}
                  />
                )}
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
                maxLength={10}
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

//***********************************  Signup Popup *************************************************** */

const Signup = ({ handleChange, handleSignup }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box color={"#10a310"}>New here? Welcome!</Box>
            <Box>
              The mobile number has not been registered with us. Lets create a
              new account.
            </Box>
            <br />
            <br />
            <Box>Create your account</Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                name="Name"
                onChange={handleChange}
                placeholder="Name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="Email"
                onChange={handleChange}
                placeholder="Email"
              />
            </FormControl>
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
            <Button backgroundColor={"#34ec53"} onClick={handleSignup}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
