const initialState = {
  id: '',
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ID":
      return {...state, id: action.payload};
    default:
      return state;
  }
};

export default deviceReducer;
