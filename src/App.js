import header from './headerlogo.png';
import Heart from './Heart.png';
import Arrow from './Arrow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <button className="button-Aboutus"> About Us </button>
      <button className="button-Aboutweb"> About the Web </button>
      <img src={header} className="logo-header" alt="logo" />
      </div>
      <div className="Main-content">
      <img src={Heart} className="Main-heart" alt="Heart"/>
      <p className="Main-heading">Heart Check Hub: Stay Informed, Stay Healthy! </p>
      <p className="Main-Subheading">A simple heart Check up by using factors that can lead to cardio vascular diseases </p>
      <button className="button-start"> Get Started <img src={Arrow} className="Arrow" alt="arrow"/> </button>
      </div>
    </div>
  );
}

export default App;
