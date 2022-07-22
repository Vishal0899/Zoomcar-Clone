import { Box, Flex, Image, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { UserAction } from "../../Redux/Auth/action";

export const Login = () => {
    const navigate = useNavigate()
    const [userId, setUseId] = useState("") 
    const dispatch = useDispatch();
    const handleLogin = () => {
        const payload = {
            userId
        }
        dispatch(UserAction(payload))
        navigate("/login_password")
    }
  return (
    <Box>
      <Box p={8} w="40%" m={"auto"} mt={5} >
        <Box w="70%"  m="auto">
          <Image src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" w={"100%"} />
        </Box>
        <Box w={"73%"} m={"auto"}  mt={"15px"} p={2}>
          <Box fontSize={"lg"} fontWeight={"bold"} mb="20px" >Enter details to login/sign-up</Box>
          <Box>
            <Flex mb={3}>
              <Flex mt={2}>
                <Box w={7} mt="2px">
                  <Image src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648" />
                </Box>
                <Box mr={2}>+91</Box>
              </Flex>
              <Box borderLeft="1px solid black" >
                <Input ml={2}  border={"none"} placeholder="Enter Mobile Number" onChange={(e) => setUseId(e.target.value)}/>
              </Box>
              <Box >
                <Button ml={5} bg={"#34ec53"} color="white" onClick={handleLogin}>CONTINUE</Button>
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
