import logo from './logo.svg';
import './App.css';
import TextAnimation from './components/Animation';
import FramerAnimation from './components/FramerAnimation';
import LottieFiles from './components/LottieFiles';
import CarouselAnimation from './components/CarouselAnimation';
import ReactAnimation from './components/ReactAnimation';
import ImageAnimation from './components/ImageAnimation';
function App() {
  return (
    <div  className="App">
       <header className="App-header">
      {/* <TextAnimation text='software developer'/> */}
      {/* <FramerAnimation /> */}
    
      {/* <ReactAnimation /> */}
      <ImageAnimation />
      {/* <LottieFiles/> */}
      </header>
    </div>

    
  );
}

export default App;
