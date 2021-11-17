import sampleImage from "../../assets/images/sample.png";

const TabFacebook = ({imageType, imagePath}) => {
  return (
    <>
      <div className="mt-10 mr-auto mb-10 ml-auto br-32 tab-fb-search-bar"/>
      <div className="m-0 tab-fb-cover-image-container">
        <img src={imageType === 'coverImage' ? imagePath : sampleImage} alt="tab-cover"
             className="tab-fb-cover-image"/>
      </div>
      <div
        className="position-relative left-250 top--130 display-flex justify-content-center align-items-center bg-white tab-fb-profile-image-container">
        <img src={imageType === 'profileImage' ? imagePath : sampleImage} alt="tab-profile"
             className="tab-fb-profile-image"/>
      </div>
      <div className="position-relative top--145 text-align-center">
        <p className="font-size-20 font-weight-bold">Profile Name</p>
      </div>
      <div className="position-relative top--100 display-flex bblr-8 bbrr-8 tab-fb-posts-container">
        <div className="mt-8 mr-auto mb-8 ml-auto br-4 bg-white tab-fb-post-image-container">
          <div className="p-8 display-flex">
            <div className="tab-fb-post-uploader-profile-image"/>
            <div className="ml-8 display-flex flex-direction-column justify-content-center">
              <p className="m-0 font-size-11 font-weight-bold">Sample Text</p>
              <p className="m-0 font-size-9">Today at 00:00 AM</p>
            </div>
          </div>
          <div className="mt-8 mr-auto mb-0 ml-auto tab-fb-post-image-parent">
            <img src={imageType === 'postImage' ? imagePath : sampleImage} alt="tab-post"
                 className="tab-fb-post-image"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabFacebook;
