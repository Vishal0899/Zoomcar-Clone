export const AuthAction = (payload) => {
  return {
    type: "isAuth",
    payload,
  };
};

export const logoutAction = (payload) => {
  return {
    type: "logout",
    payload,
  };
};
