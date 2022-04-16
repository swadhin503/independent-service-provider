
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home</h1>

      <Routes>
        <Route to="/" element={<App></App>}></Route>
      </Routes>

    </div>
  );
}

export default App;
