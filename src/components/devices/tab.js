import TabFacebook from "../socialMedia/tabFacebook";
import TabTwitter from "../socialMedia/tabTwitter";
import '../../styles/tab.css';
import '../../styles/index.css';
import TabLinkedIn from "../socialMedia/tabLinkedIn";

const Tab = ({imageType, imagePath, socialMediaPlatform}) => {
  return (
    <>
      <div className="br-32 tab-device">
        {socialMediaPlatform === 'facebook' && (
          <TabFacebook imageType={imageType} imagePath={imagePath}/>
        )}
        {socialMediaPlatform === 'twitter' && (
          <TabTwitter imageType={imageType} imagePath={imagePath}/>
        )}
        {socialMediaPlatform === 'linkedin' && (
          <TabLinkedIn imageType={imageType} imagePath={imagePath}/>
        )}
      </div>
    </>
  );
};

export default Tab;
