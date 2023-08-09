import { Routes, Route } from 'react-router-dom';
import './App.css';
import Countries from './Componenets/Countries';
import Country from './Componenets/Country';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Countries />} />
      <Route path="countries/:name" element={<Country />} />
    </Routes>
  );
}

export default App;
