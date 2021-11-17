import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Mobile from "./devices/mobile";
import Tab from "./devices/tab";
import Desktop from "./devices/desktop";
import '../styles/index.css';

const PreviewArea = () => {
  const [imageType, setImageType] = useState('');
  const [socialMediaPlatform, setSocialMediaPlatform] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [deviceId, setDeviceId] = useState('');

  const state = useSelector((state) => state);

  useEffect(() => {
    setImageType(state.imageType.value);
    setSocialMediaPlatform(state.imageType.socialMediaPlatform);
    setImagePath(state.image.imagePath);
    setDeviceId(state.device.id);
  }, [state]);

  const renderDevice = () => {
    if (deviceId === 'mobileView') {
      return (
        <Mobile imageType={imageType} imagePath={imagePath} socialMediaPlatform={socialMediaPlatform}/>
      );
    }

    if (deviceId === 'tabletView') {
      return (
        <Tab imageType={imageType} imagePath={imagePath} socialMediaPlatform={socialMediaPlatform}/>
      );
    }

    if (deviceId === 'desktopView') {
      return (
        <Desktop imageType={imageType} imagePath={imagePath} socialMediaPlatform={socialMediaPlatform}/>
      );
    }
  };

  return (
    <div className="display-flex align-items-center justify-content-center pt-48 pr-12 pb-48 pl-12">
      {renderDevice()}
    </div>
  );
};

export default PreviewArea;
