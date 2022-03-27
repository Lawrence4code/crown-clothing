import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home-component';
import Authentication from './routes/sign-in/authentication.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return (
    <div>
      <h3> Shop component </h3>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
