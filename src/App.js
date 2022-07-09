import Footer from "./components/component/Footer";
import Navbar from "./components/component/Navbar";
import Allroutes from "./components/routes/Allroutes";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
