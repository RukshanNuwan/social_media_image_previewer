import {useState} from "react";
import {RiDragDropFill} from "react-icons/ri";
import {useDropzone} from 'react-dropzone';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from '../state/index';
import '../styles/dropZone.css';
import '../styles/index.css';

const DropZone = () => {
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  const {saveImage} = bindActionCreators(actionCreators, dispatch);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const saveImageFunc = (path) => {
    saveImage(path);
  };

  const images = files.map((file, index) => (
    <div key={index}>
      {file.preview && saveImageFunc(file.preview)}
      <div className="display-flex justify-content-center image-container">
        <img src={file.preview} className="display-block br-16 image" alt="preview"/>
      </div>
    </div>
  ));

  return (
    <div className="br-16 drop-zone" {...getRootProps()}>
      {images.length === 0 ? (
        <>
          <input {...getInputProps()}/>
          <div className="display-flex justify-content-center align-items-flex-end icon-container">
            <RiDragDropFill size={32} color="#bfc4cb"/>
          </div>
          <p className="mt-0 mb-0 display-flex justify-content-center placeholder-text">Drag and drop here or click to select image</p>
        </>
      ) : (
        <div>{images}</div>
      )}
    </div>
  );
};

export default DropZone;
