import { Route, Routes} from 'react-router-dom';
import Discover from './Pages/Discover';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/discover" element={<Discover/>}/>
    </Routes>
  );
}

export default App;
