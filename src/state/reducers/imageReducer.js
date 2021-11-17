const initialState = {
  imagePath: '',
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_IMAGE":
      return {...state, imagePath: action.payload};
    default:
      return state;
  }
};

export default imageReducer;
