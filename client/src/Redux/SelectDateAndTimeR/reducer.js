const initState = {
  sDateAndTime: "",
  rDateAndTime: "",
};

export const DTreducer = (state = initState, action) => {
  switch (action.type) {
    case "DTchange":
      return {
        ...state,
        sDateAndTime: action.payload.sDateAndTime,
        rDateAndTime: action.payload.rDateAndTime,
      };
    default:
      return state;
  }
};
