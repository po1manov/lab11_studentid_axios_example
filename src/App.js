import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import PersonList from './components/PersonList';

function App() {
  return (
    <div>
      <h1>React Route Examples</h1>
      <BrowserRouter>
      <nav>
          <ul>
            <li><NavLink to='/PersonList'>Person List</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/PersonList' element={<PersonList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
