import {FaTwitter, FaUser} from "react-icons/fa";
import {BiHomeCircle} from "react-icons/bi";
import {BsBell, BsBookmark, BsSearch} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {TiDocumentText} from "react-icons/ti";
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi";
import {GiFeather} from "react-icons/gi";
import sampleImage from "../../assets/images/sample.png";

const TabTwitter = ({imageType, imagePath}) => {
  return (
    <>
      <div className="display-flex">
        <div className="tab-twitter-vertical-nav-bar">
          <div className="pt-12 display-flex flex-direction-column align-items-center">
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon">
              <FaTwitter size={24}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon">
              <BiHomeCircle size={24}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon">
              <BsSearch size={20}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon"><BsBell
              size={20}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon"><FiMail
              size={20}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon">
              <BsBookmark size={20}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon">
              <TiDocumentText size={24}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon"><FaUser
              size={20}/></div>
            <div className="display-flex align-items-center justify-content-center mb-8 tab-twitter-icon">
              <HiOutlineDotsCircleHorizontal size={24}/></div>
            <div
              className="display-flex align-items-center justify-content-center mb-8 br-50 tab-twitter-icon new-tweet">
              <GiFeather size={24}/></div>
          </div>
        </div>
        <div className="tab-twitter-content-container">
          <div className="display-flex flex-direction-column justify-content-center pl-25 tab-twitter-top-bar">
            <p className="m-0 font-size-16 font-weight-bold">User Name</p>
            <p className="m-0 font-size-11">28 Tweets</p>
          </div>
          <div className="tab-twitter-content">
            <div className="tab-twitter-cover-image-container">
              <img src={imageType === 'coverImage' ? imagePath : sampleImage} alt="tab-cover"
                   className="tab-twitter-cover-image"/>
            </div>
            <div
              className="position-relative left-15 top--70 display-flex justify-content-center align-items-center bg-white tab-twitter-profile-image-container">
              <img src={imageType === 'profileImage' ? imagePath : sampleImage} alt="tab-profile"
                   className="tab-twitter-profile-image"/>
            </div>
            <div className="position-relative top--90 pl-20">
              <p className="font-size-16 font-weight-bold">Profile Name</p>
            </div>
            <div className="position-relative top--165 left-410">
              <button
                className="pt-6 pr-12 pb-6 pl-12 bg-white font-size-11 font-weight-bold br-16 tab-twitter-edit-profile-button">Edit
                profile
              </button>
            </div>
            <div className="position-relative top--145 pl-20">
              <p className="font-size-12">@username</p>
            </div>
            <div className="position-relative top--150 ml-15 display-flex flex-direction-row">
              <div className="mr-12 display-flex flex-direction-row">
                <p className="font-size-12 mr-4 font-weight-bold">271</p>
                <p className="font-size-12 tc-gray">Following</p>
              </div>
              <div className="display-flex flex-direction-row">
                <p className="font-size-12 mr-4 font-weight-bold">7</p>
                <p className="font-size-12 tc-gray">Followers</p>
              </div>
            </div>
            <hr className="position-relative mb-0 top--120 mr-20"/>
            <div
              className="position-relative top--120 mt-0 mr-20 mb-8 ml-0 pt-30 tab-twitter-post-image-container">
              <div className="p-8 display-flex">
                <div className="tab-twitter-post-uploader-profile-image"/>
                <div className="ml-8 display-flex flex-direction-column justify-content-center">
                  <p className="m-0 font-size-12 font-weight-bold">Sample Text</p>
                  <p className="m-0 font-size-11">Lorem Ipsum is simply dummy text of the
                    printing and</p>
                </div>
              </div>
              <div className="mt-0 mr-16 mb-0 ml-50 br-12 tab-twitter-post-image-parent">
                <img src={imageType === 'postImage' ? imagePath : sampleImage} alt="tab-post"
                     className="br-12 tab-twitter-post-image"/>
              </div>
              <hr className="position-relative top-30"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabTwitter;
