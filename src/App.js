import HeaderArea from "./components/headerArea";
import DragDropArea from "./components/dragDropArea";
import HorizontalNavigator from "./components/horizontalNavigator";
import PreviewArea from "./components/previewArea";
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderArea/>
      <DragDropArea/>
      <HorizontalNavigator/>
      <PreviewArea/>
    </div>
  );
}

export default App;
