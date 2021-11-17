import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";
import {IoLaptopOutline, IoPhonePortraitOutline, IoTabletPortraitOutline} from "react-icons/io5";
import '../styles/horizontalNavigation.css';
import '../styles/index.css';

const HorizontalNavigator = () => {
  const dispatch = useDispatch();
  const {setId} = bindActionCreators(actionCreators, dispatch);

  const onClick = (e) => {
    setId(e.target.id);
  };

  return (
    <div className="pt-64 pb-64 display-flex flex-direction-column align-items-center horizontal-navigation-container">
      <div className="mb-32 pt-2 pr-8 pb-2 pl-8 text-align-center bg-white br-32 div-title-container">
        <p className="horizontal-navigation-title"><strong>Step - 03 :</strong> Select the device</p>
      </div>
      <div className="display-flex align-items-center justify-content-space-between device-icon-container-parent">
        <div id="mobileView" onClick={onClick}
             className="display-flex flex-direction-column justify-content-center align-items-center br-8 device-icon-container">
          <IoPhonePortraitOutline id="mobileView" color={'#005068'} size={64}/>
          <p id="mobileView" className="mt-8 mr-0 mb-0 ml-0 font-weight-bold">Mobile</p>
        </div>
        <div id="tabletView" onClick={onClick}
             className="display-flex flex-direction-column justify-content-center align-items-center br-8 device-icon-container">
          <IoTabletPortraitOutline id="tabletView" color={'#005068'} size={64}/>
          <p id="tabletView" className="mt-8 mr-0 mb-0 ml-0 font-weight-bold">Tablet</p>
        </div>
        <div id="desktopView" onClick={onClick}
             className="display-flex flex-direction-column justify-content-center align-items-center br-8 device-icon-container">
          <IoLaptopOutline id="desktopView" color={'#005068'} size={64}/>
          <p id="desktopView" className="mt-8 mr-0 mb-0 ml-0 font-weight-bold">Desktop / Laptop</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavigator;
