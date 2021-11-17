import React from 'react';
import Select from 'react-select';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";
import '../styles/selectInput.css';
import '../styles/index.css';

const socialMediaOptions = [
  {value: 'facebook', label: 'Facebook'},
  {value: 'twitter', label: 'Twitter'},
  {value: 'linkedin', label: 'LinkedIn'}
];

const imageTypeOptions = [
  {value: 'coverImage', label: 'Cover Image'},
  {value: 'profileImage', label: 'Profile Image'},
  {value: 'postImage', label: 'Post Image'},
];

const SocialMediaAndImageType = () => {
  const dispatch = useDispatch();
  const {saveImageType, saveSocialMediaPlatform} = bindActionCreators(actionCreators, dispatch);

  const onImageTypeInputChangeHandler = (selectedOpts) => {
    saveImageType(selectedOpts.value);
  };

  const onSocialMediaTypeInputChangeHandler = (selectedOpts) => {
    saveSocialMediaPlatform(selectedOpts.value);
  };

  return (
    <div className="display-flex flex-direction-column container">
      <div
        className="mt-0 mr-auto mb-32 ml-auto pt-2 pr-8 pb-2 pl-8 text-align-center bg-white br-32 div-title-container">
        <p className="image-type-title"><strong>Step - 02 :</strong> Select social media platform & image type</p>
      </div>
      <div className="display-flex justify-content-space-between">
        <div>
          <p className="mt-0 mr-0 mb-4 ml-0 font-size-14 tc-white">Social Media Platform</p>
          <Select
            closeMenuOnSelect={true}
            options={socialMediaOptions}
            onChange={onSocialMediaTypeInputChangeHandler}
          />
        </div>
        <div>
          <p className="mt-0 mr-0 mb-4 ml-0 font-size-14 tc-white">Image Type</p>
          <Select
            closeMenuOnSelect={true}
            options={imageTypeOptions}
            onChange={onImageTypeInputChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAndImageType;
