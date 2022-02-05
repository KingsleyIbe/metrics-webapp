import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
