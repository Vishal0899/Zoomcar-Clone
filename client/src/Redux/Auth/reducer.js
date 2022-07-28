const initState = {
  Name: "",
  Email: "",
  Number: "",
  Password: "",
  auth: false,
};

export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "isAuth":
      return {
        ...state,
        Name: action.payload.Name,
        Email: action.payload.Email,
        Number: action.payload.Number,
        Password: action.payload.Password,
        auth: true,
      };
    case "logout":
      return {
        ...state,
        Name: action.payload.Name,
        Email: action.payload.Email,
        Number: action.payload.Number,
        Password: action.payload.Password,
        auth: false,
      };
    default:
      return state;
  }
};
