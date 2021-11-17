const initialState = {
  value: '',
  socialMediaPlatform: '',
};

const imageTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_IMAGE_TYPE":
      return {...state, value: action.payload};
    case "SAVE_SOCIAL_MEDIA_PLATFORM":
      return {...state, socialMediaPlatform: action.payload};
    default:
      return state;
  }
};

export default imageTypeReducer;
