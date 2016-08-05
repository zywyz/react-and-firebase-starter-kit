const defaultState = {
  logged: false,
  name: '',
  photo: '',
};

const loginStatus = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return Object.assign(
        {},
        state,
        { logged: true },
      );
    case 'SET_USER_DATA':
      return Object.assign(
        {},
        state,
        {
          name: action.data.name,
          photo: action.data.photo,
        }
      );
    case 'RESET_LOGGED_IN':
      return defaultState;
    default:
      return state;
  }
};

export default loginStatus;

