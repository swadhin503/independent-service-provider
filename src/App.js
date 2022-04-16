
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <h1>Home</h1>

      <Routes>
        <Route to="/" element={<App></App>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
