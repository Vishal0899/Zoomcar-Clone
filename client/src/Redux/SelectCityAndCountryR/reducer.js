const initState = {
  Country: "",
  City: "",
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
    default:
      return state;
  }
};
