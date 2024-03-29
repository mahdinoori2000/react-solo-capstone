import { Routes, Route } from 'react-router-dom';
import Countries from './Componenets/Countries';
import Country from './Componenets/Country';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Countries />} />
      <Route path="name/:countryName" element={<Country />} />
    </Routes>
  );
}

export default App;
