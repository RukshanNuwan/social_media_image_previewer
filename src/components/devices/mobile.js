import MobileFacebook from "../socialMedia/mobileFacebook";
import MobileTwitter from "../socialMedia/mobileTwitter";
import MobileLinkedIn from "../socialMedia/mobileLinkedIn";
import '../../styles/index.css';
import '../../styles/mobile.css';

const Mobile = ({imageType, imagePath, socialMediaPlatform}) => {
  return (
    <>
      <div className="mobile-device br-32">
        {socialMediaPlatform === 'facebook' && (
          <MobileFacebook imageType={imageType} imagePath={imagePath}/>
        )}
        {socialMediaPlatform === 'twitter' && (
          <MobileTwitter imageType={imageType} imagePath={imagePath}/>
        )}
        {socialMediaPlatform === 'linkedin' && (
          <MobileLinkedIn imageType={imageType} imagePath={imagePath}/>
        )}
      </div>
    </>
  );
};

export default Mobile;
