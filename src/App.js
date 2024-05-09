import './App.css';
import ButtonUsage from './Components/Analytics/Analysis';
import EnvironmentalSuggestion from './Components/SuggestionForGoodEnvironment/Suggestion';
import Navbar2 from './Components/Navbar2/navbar2';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
function App() {
  return (
//     <div className="App">
//     //   <header className="App-header">
    
//     // <h1 className="bg-red-600 text-white font-extrabold ">Hellow World</h1>
//     //   </header>
// <Navbar2/>
//     <ButtonUsage/>
//     <EnvironmentalSuggestion/>
//     </div>
<Router>
{/* <Navbar2 />
{/* Other components and routes */}
{/* <br></br>
<br></br>
<br></br>
<br></br>
<br></br> */}

<Home/>
{/* <Footer/> */} 
</Router>
  );
}

export default App;

