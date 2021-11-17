export const saveImage = (imagePath) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_IMAGE',
      payload: imagePath
    });
  };
};

export const setId = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_ID',
      payload: id
    });
  };
};

export const saveImageType = (imageType) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_IMAGE_TYPE',
      payload: imageType
    });
  };
};

export const saveSocialMediaPlatform = (socialMediaPlatform) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_SOCIAL_MEDIA_PLATFORM',
      payload: socialMediaPlatform
    });
  };
};
