import sampleImage from "../../assets/images/sample.png";

const MobileFacebook = ({imageType, imagePath}) => {
  return (
    <>
      <div className="mt-10 mr-auto mb-10 ml-auto br-32 mobile-fb-search-bar"/>
      <div className="mt-0 mr-auto mb-0 ml-auto mobile-fb-cover-image-container">
        <img src={imageType === 'coverImage' ? imagePath : sampleImage} alt="mobile-cover"
             className="btlr-8 btrr-8 mobile-fb-cover-image"/>
      </div>
      <div
        className="position-relative left-65 top--80 display-flex justify-content-center align-items-center bg-white mobile-fb-profile-image-container">
        <img src={imageType === 'profileImage' ? imagePath : sampleImage} alt="mobile-profile"
             className="mobile-fb-profile-image"/>
      </div>
      <div className="position-relative top--95 text-align-center">
        <p className="font-size-18 font-weight-bold">Profile Name</p>
      </div>
      <hr className="position-relative top--100 mobile-fb-hr"/>
      <div className="position-relative top--100 mobile-fb-post-image-container">
        <div className="display-flex pt-0 pr-8 pb-0 pl-8">
          <div className="mobile-fb-post-uploader-profile-image"/>
          <div className="ml-8 display-flex flex-direction-column justify-content-center">
            <p className="m-0 font-size-11 font-weight-bold">Sample Text</p>
            <p className="m-0 font-size-9">Today at 00:00 AM</p>
          </div>
        </div>
        <div className="mt-8 mobile-fb-post-image-parent">
          <img src={imageType === 'postImage' ? imagePath : sampleImage} alt="mobile-post"
               className="mobile-fb-post-image"/>
        </div>
      </div>
    </>
  )
}

export default MobileFacebook;
