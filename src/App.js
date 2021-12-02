import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './Component/Home/Profile';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <main>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </main>
    </div>
  );
}

export default App;
