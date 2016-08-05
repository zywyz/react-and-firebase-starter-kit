const defaultState = {
  data: {},
  restrictedData: '',
};

const tags = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return Object.assign(
        {},
        state,
        { data: action.data },
      );
    case 'SET_RESTRICTED_DATA':
      return Object.assign(
        {},
        state,
        { restrictedData: action.data },
      );
    case 'RESET_RESTRICTED_DATA':
      return Object.assign(
        {},
        state,
        { restrictedData: '' },
      );
    default:
      return state;
  }
};

export default tags;
