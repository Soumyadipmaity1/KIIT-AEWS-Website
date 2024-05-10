
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar2 from './Components/Navbar2/navbar2';
import Home from './Pages/Home/home';
import About from './Pages/AboutUs/about';
import Members from './Pages/Members/member';
import Events from './Pages/Events/event';
import Gallery from './Pages/Gallery/gallery';
import Blogs from './Pages/Blog/blog';
import Contact from './Pages/Contact/contact';

const App = () => {
  return (
    <Router>
      <Navbar2 />

       <Routes>
       <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/events" component={Events} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
       </Routes>
    </Router>
  );
};

export default App;
