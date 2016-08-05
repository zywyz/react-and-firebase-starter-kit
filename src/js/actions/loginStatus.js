export const setLoggedIn = () => ({
  type: 'SET_LOGGED_IN',
});

export const setUserData = (name, photo) => ({
  type: 'SET_USER_DATA',
  data: {
    name,
    photo,
  },
});

export const resetLoggedIn = () => ({
  type: 'RESET_LOGGED_IN',
});
