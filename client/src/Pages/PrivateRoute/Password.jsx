import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "../../Redux/Auth/action";

export const Password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuth = () => {
    dispatch(AuthAction());
    navigate("/");
  };
  return (
    <Box>
      <Box w={"30%"} m={"auto"} mt={10} p={10}>
        <Box mb={5}>
          <Input placeholder="Enter Password" />
        </Box>
        <Box w={"35%"} >
          <Button  onClick={handleAuth} bg={"#34ec53"} color="white">
            CONTUNUE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
