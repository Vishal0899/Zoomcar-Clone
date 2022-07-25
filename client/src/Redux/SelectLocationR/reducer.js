let initState = {
  address: "",
};

export const Lreducer = (state = initState, action) => {
  switch (action.type) {
    case "LChange":
      return {
        ...state,
        address: action.payload.address,
      };
    default:
      return state;
  }
};
