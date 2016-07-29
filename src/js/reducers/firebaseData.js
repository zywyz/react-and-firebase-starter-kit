const tags = (state = {}, action = undefined) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.data;
    default:
      return state;
  }
};

export default tags;
