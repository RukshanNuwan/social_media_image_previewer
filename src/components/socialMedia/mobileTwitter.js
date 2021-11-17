import sampleImage from "../../assets/images/sample.png";

const MobileTwitter = ({imageType, imagePath}) => {
  return (
    <>
      <div className="mt-25 mobile-twitter-cover-image-container">
        <img src={imageType === 'coverImage' ? imagePath : sampleImage} alt="mobile-cover"
             className="mobile-twitter-cover-image"/>
      </div>
      <div className="position-relative left-8 top--15 display-flex justify-content-center align-items-center bg-white mobile-twitter-profile-image-container">
        <img src={imageType === 'profileImage' ? imagePath : sampleImage} alt="mobile-profile"
             className="mobile-twitter-profile-image"/>
      </div>
      <div className="position-relative top--30 ml-15">
        <p className="font-size-16 font-weight-bold">Profile Name</p>
      </div>
      <div className="position-relative top--115 left-190">
        <button className="pt-6 pr-12 pb-6 pl-12 bg-white br-16 font-size-11 font-weight-bold mobile-twitter-edit-profile-button">Edit profile</button>
      </div>
      <div className="position-relative top--88 ml-15">
        <p className="font-size-12 tc-gray">@username</p>
      </div>
      <div className="position-relative top--100 display-flex flex-direction-row ml-15">
        <div className="mr-12 display-flex flex-direction-row">
          <p className="font-size-11 font-weight-bold mr-4">271</p>
          <p className="font-size-11 tc-gray">Following</p>
        </div>
        <div className="display-flex flex-direction-row">
          <p className="font-size-11 font-weight-bold mr-4">7</p>
          <p className="font-size-11 bg-gray">Followers</p>
        </div>
      </div>
      <hr className="position-relative top--100 mobile-twitter-hr"/>
      <div className="position-relative top--100 mobile-twitter-post-image-container">
        <div className="pt-0 pr-12 pb-0 pl-12 display-flex">
          <div className="mobile-twitter-post-uploader-profile-image"/>
          <div className="ml-8 display-flex flex-direction-column justify-content-center">
            <p className="m-0 font-size-11 font-weight-bold">Sample Text</p>
            <p className="m-0 font-size-9">Lorem Ipsum is simply dummy text of the printing and</p>
          </div>
        </div>
        <div className="mt-8 mr-0 mb-0 ml-60 mobile-twitter-post-image-parent">
          <img src={imageType === 'postImage' ? imagePath : sampleImage} alt="mobile-post"
               className="br-8 mt-auto mr-0 mb-auto ml-0 mobile-twitter-post-image"/>
        </div>
      </div>
    </>
  )
}

export default MobileTwitter;
