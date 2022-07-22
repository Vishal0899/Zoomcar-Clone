export const CCaction = (payload) => {
  return {
    type: "CCChange",
    payload,
  };
};

export const Laction = (payload) => {
  return {
    type: "LChange",
    payload,
  };
};
