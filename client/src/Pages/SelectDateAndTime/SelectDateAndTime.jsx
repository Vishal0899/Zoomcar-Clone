import react from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DTaction } from "../../Redux/SelectDateAndTimeR/action";
import { useCookies } from "react-cookie";

export const SelectDateAndTime = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  let navigate = useNavigate();
  const [sDate, setSDate] = useState("");
  const [rDate, setRDate] = useState("");
  const [sTime, setSTime] = useState("");
  const [rTime, setRTime] = useState("");
  const dispatch = useDispatch();

  const handleDateTime = () => {
    const payload = {
      sDateAndTime: `${sDate}  ${sTime}`,
      rDateAndTime: `${rDate}  ${rTime}`,
    };
    dispatch(DTaction(payload));
    setCookie("startDT", `${sDate}  ${sTime}`);
    setCookie("returnDT", `${rDate}  ${rTime}`);
    navigate("/");
  };

  let date = new Date()
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");
  // console.log(date);

  return (
    <>
      <Box>
        <Box>
          <Flex style={{ marginTop: "20px", marginBottom: "10px" }}>
            <BsArrowLeft
              style={{
                fontSize: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              onClick={() => navigate("/")}
            />
            <Box style={{ fontSize: "large" }}>Choose Trip Dates</Box>
          </Flex>
        </Box>
        <Box
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            width: "60%",
            margin: "auto",
            padding: "5% 0% 10% 15%",
          }}
        >
          <Flex
            style={{
              border: "1px solid grey",
              padding: "10px",
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <Box mr={4} ml={5} style={{ color: "grey" }}>
              {sDate == "" ? "Start Date Pick Up Time" : `${sDate}-${sTime}`}
            </Box>
            <Box mr={4} style={{ color: "black" }}>
              <BsArrowRight style={{ marginTop: "6px", fontSize: "large" }} />
            </Box>
            <Box ml={2} style={{ color: "grey" }}>
              {rDate == "" ? "Return Date Drop Off Time" : `${rDate}-${rTime}`}
            </Box>
          </Flex>
          <Box mb={10}>
            <Flex>
              <Box style={{ marginRight: "5%" }}>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  Start Date
                </Box>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  <input
                    type="date"
                    placeholder="Year-Day-Month"
                    min={date}
                    onChange={(e) => setSDate(e.target.value)}
                  />
                </Box>
              </Box>
              <Box>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  Pick Up Time
                </Box>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  <input
                    type="time"
                    placeholder=""
                    onChange={(e) => setSTime(e.target.value)}
                    disabled={sDate == ""}
                  />
                </Box>
              </Box>
            </Flex>
            <Flex>
              <Box style={{ marginRight: "5%" }}>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  Return Date
                </Box>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  <input
                    type="date"
                    placeholder=""
                    min={sDate}
                    onChange={(e) => setRDate(e.target.value)}
                    disabled={sTime == ""}
                  />
                </Box>
              </Box>
              <Box>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  Drop Off Time
                </Box>
                <Box style={{ marginBottom: "10px", marginTop: "10px" }}>
                  <input
                    type="time"
                    placeholder=""
                    onChange={(e) => setRTime(e.target.value)}
                    disabled={rDate == ""}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Button
              disabled={rTime == ""}
              style={{
                width: "70%",
                color: "white",
                backgroundColor: "#30e32a",
              }}
              onClick={handleDateTime}
            >
              CONTINUE
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
