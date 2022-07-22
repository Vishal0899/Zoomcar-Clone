const initState = {
  ID : "",
  auth: false,
};

export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "isAuth":
      return {
        ...state,
        auth: true,
      };
    case "UserID" :
        return {
            ...state,
            ID : action.payload.userId
        }
    default:
      return state;
  }
};
