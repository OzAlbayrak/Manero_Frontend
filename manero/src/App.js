import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<HomeView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
