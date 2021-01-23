import './App.css';
import backgroundImg from "./assets/images/grey-wood.jpg"

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
    
    </div>
  );
}

export default App;
