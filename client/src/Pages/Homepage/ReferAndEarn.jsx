import React from "react";
import { Grid, GridItem, Box, Image, Flex, Heading } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


export const ReferAndEarn = () => {
  return (
    <>
      <Box w="70%" m="auto" mt="10px" mb="50px">
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem
            w="90%"
            // h="250"
            ml="25px"
            border="1px solid black"
            borderRadius="5px"
          >
            <a>
              <Flex  borderBottom='1px solid black'>
                <Box p="15px" w={"65%"}>
                  <Box fontSize="lg" fontWeight="bold" mb={5}>
                    Do your friends like a weekend get away?
                  </Box>
                  <Box w={"100%"} fontSize="sm">
                    You earn Rs 1200 as Z-Points. Your friend gets flat 40% off.
                    (Max upto Rs 2500)
                  </Box>
                </Box>
                <Box w={"35%"}>
                  <Image
                    src="https://www.zoomcar.com/img/people.jpg"
                    h={196}
                    w={"100%"}
                    borderRadius="5px"
                  />
                </Box>
              </Flex>
              <Box>
                <Flex pl={10} pt={5} pb={2}>
                    <HiOutlineArrowNarrowRight  />
                    <Box fontSize='md' fontWeight='bold' ml={5}>
                        Refer and Earn
                    </Box>
                </Flex>
              </Box>
            </a>
          </GridItem>
          <GridItem
            w="90%"
            h="250"
            ml="20px"
            border="1px solid black"
            borderRadius="5px"
          >
            <a>
              <Flex>
                <Box pl="15px" pt="15px" w={"65%"}>
                  <Box fontSize="x-large" fontWeight="bold">
                    UPTO 50% Off
                  </Box>
                  <Box fontSize="lg" color="grey" mb={8}>
                    on your first booking from the app!
                  </Box>
                  <Box
                    border="2px dashed grey"
                    fontSize="larger"
                    fontWeight="bold"
                    color="rgb(187,184,184)"
                    p="2"
                    w={"75%"}
                  >
                    Use Code: ZOOMAPP
                  </Box>
                  <Box
                    fontSize="x-large"
                    color="rgb(45,174,45)"
                    fontWeight="bold"
                    mt={6}
                  >
                    Install Zoomcar App now!
                  </Box>
                </Box>
                <Box w="35%" h="250">
                  <Image
                    src="https://www.zoomcar.com/img/cellphone.png"
                    h="100%"
                    w="100%"
                  />
                </Box>
              </Flex>
            </a>
          </GridItem>
        </Grid>
      </Box>
      <br />
      <br />
    </>
  );
};
