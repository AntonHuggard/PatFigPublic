import React, { Component } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
// import NotFound from './pages/not-found';
import Home from './pages/home';
import About from './pages/about';
import Tutorial from './pages/tutorial';
import Contribute from './pages/contribute';
import Contact from './pages/contact';

class App extends Component {
  
  render() {
      return (
        <React.Fragment>
  
          <HashRouter>
                <Routes>
                  <Route index path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/tutorial" element={<Tutorial />} />
                  <Route path="/contribute" element={<Contribute />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </HashRouter>
  
        </React.Fragment>
      );
    }

}

export default App;
