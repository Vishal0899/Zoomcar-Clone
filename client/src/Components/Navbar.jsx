import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ZoomCarLogo from "../assets/ZoomCarLogo.png";
import { IoWalletOutline } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/Gi";
import { ImCoinDollar } from "react-icons/Im";
import { IoCarOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/Md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/Md";
import { CgMenuBoxed } from "react-icons/Cg";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { logoutAction } from "../Redux/Auth/action";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const city = useSelector((state) => state.CCreducer.City);
  const { Name, Email, Number, auth } = useSelector(
    (state) => state.AuthReducer
  );
  // console.log(auth);
  console.log(cookies.auth);

  return (
    <>
      <Box bgColor={"black"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Hamburger
                Name={Name}
                Email={Email}
                Number={Number}
                auth={auth}
                city={city}
              />
            </Box>
            <Box onClick={() => navigate("/")}>
              <Image src={ZoomCarLogo} />
            </Box>
          </HStack>
          <Flex
            w={500}
            mr={10}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Box>
              <Button
                fontSize={"larger"}
                fontWeight={"bold"}
                color={"white"}
                textDecoration={"none"}
                variant={"link"}
              >
                Become a Host
              </Button>
            </Box>
            <Box>
              <Button
                fontSize={"larger"}
                fontWeight={"bold"}
                color={"white"}
                textDecoration={"none"}
                variant={"link"}
              >
                ZMS
              </Button>
            </Box>
            <Flex w={140} justifyContent={"space-between"}>
              <Box>
                <Button
                  fontSize={"larger"}
                  fontWeight={"bold"}
                  mt={1}
                  mr={2}
                  color={"white"}
                  textDecoration={"none"}
                  variant={"link"}
                  disabled={cookies.auth !== undefined}
                  onClick={() => navigate("/login")}
                >
                  {cookies.auth != undefined
                    ? cookies.userName
                    : "Login/Signup"}
                </Button>
              </Box>
              <Box>
                {cookies.auth !== undefined ? (
                  <Avatar
                    size={"sm"}
                    src={
                      "https://www.shutterstock.com/image-illustration/white-profile-icon-app-logo-blue-1932531338"
                    }
                  />
                ) : (
                  ""
                )}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

function Hamburger({ Name, Email, Number, auth, city }) {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    removeCookie("userName");
    removeCookie("userEmail");
    removeCookie("userNumber");
    removeCookie("auth");
    const payload = {
      Name: "",
      Email: "",
      Number: "",
      Password: "",
    };
    dispatch(logoutAction(payload));
    window.location.reload();
  };

  return (
    <>
      <HamburgerIcon
        boxSize={"6"}
        color={"white"}
        onClick={onOpen}
      ></HamburgerIcon>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg="black">
            {cookies.auth == undefined ? (
              <Box
                color={"white"}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login/Register
              </Box>
            ) : (
              <Box>
                <Box fontWeight="bold" color="white">
                  {Name || cookies.userName}
                </Box>
                <Box fontSize="md" color="#a5a3a3">
                  {Email || cookies.userEmail}
                </Box>
                <Box fontSize="md" color="#a5a3a3">
                  {Number || cookies.userNumber}
                </Box>
              </Box>
            )}
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Flex>
                  <GiTwoCoins
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      fontSize: "25px",
                    }}
                  />
                  <Box mt={"5px"} ml={"15px"}>
                    Credits
                  </Box>
                </Flex>
                <Box>
                  <Box mt={"5px"}>0</Box>
                </Box>
              </Flex>
              <Flex justifyContent={"space-between"} mt={"10px"}>
                <Flex>
                  <ImCoinDollar
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      fontSize: "25px",
                    }}
                  />
                  <Box mt={"5px"} ml={"15px"}>
                    Z-POINTS
                  </Box>
                </Flex>
                <Box>
                  <Box>0</Box>
                </Box>
              </Flex>
              <Flex justifyContent={"space-between"} mt={"10px"}>
                <Flex>
                  <IoWalletOutline
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      fontSize: "25px",
                    }}
                  />
                  <Box mt={"5px"} ml={"15px"}>
                    Paytm wallet
                  </Box>
                </Flex>
                <Box>
                  <Box mt={"5px"} ml={"15px"} mb={"15px"} color="brown">
                    ₹ Undefined
                  </Box>
                </Box>
              </Flex>
            </Box>
            <hr />
            <br />
            <Box>
              <Flex>
                <IoCarOutline
                  style={{
                    marginRight: "10px",
                    marginBottom: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mb={"5px"} ml={"15px"}>
                  My Trips
                </Box>
              </Flex>
              <Flex mt={"10px"}>
                <MdVerifiedUser
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Profile Verification
                </Box>
              </Flex>

              <Flex justifyContent={"space-between"}>
                <Flex onClick={() => navigate("/CityAndCountry")} mt={"10px"}>
                  <IoLocationOutline
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      fontSize: "25px",
                    }}
                  />
                  <Box mt={"5px"} ml={"15px"}>
                    Change City
                  </Box>
                </Flex>
                <Box>
                  <Box mt={"15px"} color="green">
                    {city !== "" || cookies.City !== undefined
                      ? city || cookies.City
                      : ""}
                  </Box>
                </Box>
              </Flex>
              <Flex mt={"10px"}>
                <AiOutlineCodeSandbox
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"} mb={"15px"}>
                  Supermiler Club
                </Box>
              </Flex>
            </Box>
            <hr />
            <br />
            <Box>
              <Flex>
                <CgMenuBoxed
                  style={{ marginRight: "10px", fontSize: "25px" }}
                />
                <Box ml={"15px"}>Zoomcar Fleet Vehicles Policies</Box>
              </Flex>
              <Flex mt={"10px"}>
                <CgMenuBoxed
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Zoomcar Host Vehicles Policies
                </Box>
              </Flex>
              <Flex mt={"10px"} mb={"10px"}>
                <IoCallOutline
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Help & Support
                </Box>
              </Flex>
            </Box>
            <hr />
            <br />
            <Box onClick={handleLogout}>
              <Flex>
                <MdLogout
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Logout
                </Box>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
