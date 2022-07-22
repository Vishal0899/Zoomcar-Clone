export const AuthAction = () => {
  return {
    type: "isAuth",
  };
};


export const UserAction = (payload) => {
    return {
        type : "UserID",
        payload
    }
}