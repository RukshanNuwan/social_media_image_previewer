import sampleImage from "../../assets/images/sample.png";

const DesktopFacebook = ({imageType, imagePath}) => {
  return (
    <>
      <div className="desktop-fb-search-bar"/>
      <div className="m-0 display-flex justify-content-center desktop-fb-cover-image-container">
        <img src={imageType === 'coverImage' ? imagePath : sampleImage} alt="desktop-cover"
             className="bblr-8 bbrr-8 desktop-fb-cover-image"/>
      </div>
      <div
        className="position-relative top--125 left-580 display-flex justify-content-center align-items-center bg-white desktop-fb-profile-image-container">
        <img src={imageType === 'profileImage' ? imagePath : sampleImage} alt="desktop-profile"
             className="desktop-fb-profile-image"/>
      </div>
      <button
        className="position-relative top--175 left-960 pt-4 pr-6 pb-4 pl-6 desktop-fb-btn-edit-cover-photo">Edit
        Cover Photo
      </button>
      <div className="position-relative top--165 text-align-center">
        <p className="font-size-20 font-weight-bold">Profile Name</p>
      </div>
      <hr className="position-relative top--150 mt-0 mr-150 mb-0 ml-150 desktop-fb-hr"/>
      <div className="position-relative top--100 display-flex m-auto desktop-fb-posts-container">
        <div className="desktop-fb-post-image-container">
          <div className="p-8 display-flex">
            <div className="desktop-fb-post-uploader-profile-image"/>
            <div className="ml-8 display-flex flex-direction-column justify-content-center">
              <p className="m-0 font-size-11 font-weight-bold">Sample Text</p>
              <p className="m-0 font-size-9">Today at 00:00 AM</p>
            </div>
          </div>
          <div className="mt-8 mr-0 mb-8 ml-0 desktop-fb-post-image-parent">
            <img src={imageType === 'postImage' ? imagePath : sampleImage} alt="desktop-post"
                 className="desktop-fb-post-image"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopFacebook;
