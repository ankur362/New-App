
import './App.css';
import News from './component/News/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specific from './component/specific/Specific';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/specific" element={<Specific />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;
