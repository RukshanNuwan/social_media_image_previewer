import {FaTwitter, FaUser} from "react-icons/fa";
import {BiHomeCircle} from "react-icons/bi";
import {RiHashtag} from "react-icons/ri";
import {BsBell, BsBookmark} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {TiDocumentText} from "react-icons/ti";
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi";
import sampleImage from "../../assets/images/sample.png";

const DesktopTwitter = ({imageType, imagePath}) => {
  return (
    <>
      <div className="display-flex">
        <div className="desktop-twitter-vertical-nav-bar">
          <div
            className="display-flex flex-direction-column align-items-flex-start desktop-twitter-icon-container">
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <FaTwitter size={30}/>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><BiHomeCircle size={30}/></div>
              <div><p className="m-0">Home</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><RiHashtag size={30}/></div>
              <div><p className="m-0">Explore</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><BsBell size={25}/></div>
              <div><p className="m-0">Notifications</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><FiMail size={25}/></div>
              <div><p className="m-0">Messages</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><BsBookmark size={25}/></div>
              <div><p className="m-0">Bookmarks</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><TiDocumentText size={30}/></div>
              <div><p className="m-0">Lists</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><FaUser size={24}/></div>
              <div><p className="m-0">Profile</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon">
              <div className="menu-item"><HiOutlineDotsCircleHorizontal size={30}/></div>
              <div><p className="m-0">More</p></div>
            </div>
            <div
              className="mb-8 display-flex justify-content-space-evenly align-items-center desktop-twitter-icon w-100 bg-blue br-32">
              <p className="m-0 font-weight-bold tc-white">Tweet</p>
            </div>
          </div>
        </div>
        <div className="desktop-twitter-content-container">
          <div
            className="display-flex flex-direction-column justify-content-center pl-25 desktop-twitter-top-bar">
            <p className="m-0 font-size-18 font-weight-bold">User Name</p>
            <p className="m-0 font-size-14">28 Tweets</p>
          </div>
          <div className="desktop-twitter-content">
            <div
              className="desktop-twitter-cover-image-container">
              <img src={imageType === 'coverImage' ? imagePath : sampleImage} alt="tab-cover"
                   className="desktop-twitter-cover-image"/>
            </div>
            <div
              className="position-relative top--70 left-15 display-flex justify-content-center align-items-center bg-white desktop-twitter-profile-image-container">
              <img src={imageType === 'profileImage' ? imagePath : sampleImage} alt="tab-profile"
                   className="desktop-twitter-profile-image"/>
            </div>
            <div className="position-relative top--85 ml-30">
              <p className="font-size-18 font-weight-bold">Profile Name</p>
            </div>
            <div className="position-relative top--185 left-530">
              <button
                className="pt-10 pr-16 pb-10 pl-16 bg-white br-16 font-size-11 font-weight-bold desktop-twitter-edit-profile-button">Edit
                profile
              </button>
            </div>
            <div className="position-relative top--155 ml-30">
              <p className="font-size-16">@username</p>
            </div>
            <div className="position-relative top--160 display-flex flex-direction-row ml-30">
              <div className="display-flex flex-direction-row mr-12">
                <p className="font-size-13 mr-4 font-weight-bold">271</p>
                <p className="font-size-13 mr-4 tc-gray">Following</p>
              </div>
              <div className="display-flex flex-direction-row">
                <p className="font-size-13 mr-4 font-weight-bold">7</p>
                <p className="font-size-13 mr-4 tc-gray">Followers</p>
              </div>
            </div>
            <hr className="position-relative mr-0 mb-0 top--150"/>
            <div className="position-relative top--120 desktop-twitter-post-image-container">
              <div className="pt-8 pr-8 pb-8 pl-0 ml-10 display-flex">
                <div className="desktop-twitter-post-uploader-profile-image"/>
                <div className="ml-8 display-flex flex-direction-column justify-content-center">
                  <p className="m-0 font-size-16 font-weight-bold">Sample Text</p>
                  <p className="m-0 font-size-14">Lorem Ipsum is simply dummy text of the printing and</p>
                </div>
              </div>
              <div className="mt-0 mr-16 mb-0 ml-60 br-12 desktop-twitter-post-image-parent">
                <img src={imageType === 'postImage' ? imagePath : sampleImage} alt="tab-post"
                     className="br-12 desktop-twitter-post-image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopTwitter;
