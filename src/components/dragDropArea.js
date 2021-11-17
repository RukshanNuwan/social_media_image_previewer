import DropZone from "./dropZone";
import SocialMediaAndImageType from "./socialMediaAndImageType";
import '../styles/dragDropArea.css';
import '../styles/index.css';

const DragDropArea = () => {
  return (
    <div
      className="display-flex flex-direction-column justify-content-center align-items-center pt-16 pb-16 parent-container">
      <div className="mb-32 pt-2 pr-8 pb-2 pl-8 text-align-center bg-white br-32 div-title-container">
        <p className="drag-drop-title"><strong>Step - 01 :</strong> Upload your image</p>
      </div>
      <div className="p-12 bg-white br-16 drag-drop-div">
        <DropZone/>
      </div>
      <div className="mt-32 pt-32 pr-0 pb-32 pl-0 display-flex justify-content-center br-16 image-type-container">
        <SocialMediaAndImageType/>
      </div>
    </div>
  );
};

export default DragDropArea;
