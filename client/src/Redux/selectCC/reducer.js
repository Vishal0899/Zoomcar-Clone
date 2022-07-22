const initState = {
  Country: "",
  City: "",
  address: "",
};
console.log(initState.Country);
console.log(initState.City);

export const CCreducer = (state = initState, action) => {
  switch (action.type) {
    case "CCChange":
      return {
        ...state,
        Country: action.payload.Country,
        City: action.payload.City,
      };
    case "LChange":
      return {
        ...state,
        Country: action.payload.Country,
        City: action.payload.City,
        address: action.payload.address,
      };
    default:
      return state;
  }
};
