
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./App.css";
import Lo from "./components/pages/Lo/Lo";

import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/oa" element={<Lo />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
