import DesktopFacebook from "../socialMedia/desktopFacebook";
import DesktopTwitter from "../socialMedia/desktopTwitter";
import '../../styles/desktop.css';
import '../../styles/index.css';
import DesktopLinkedIn from "../socialMedia/desktopLinkedIn";

const Desktop = ({imageType, imagePath, socialMediaPlatform}) => {
  return (
    <>
      <div className="br-32 desktop-device">
        {socialMediaPlatform === 'facebook' && (
          <DesktopFacebook imageType={imageType} imagePath={imagePath}/>
        )}
        {socialMediaPlatform === 'twitter' && (
          <DesktopTwitter imagePath={imagePath} imageType={imageType}/>
        )}
        {socialMediaPlatform === 'linkedin' && (
          <DesktopLinkedIn imageType={imageType} imagePath={imagePath}/>
        )}
      </div>
    </>
  );
};

export default Desktop;
