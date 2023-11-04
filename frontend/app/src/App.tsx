import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Index} from './views/Index';
import {Login} from './views/Login'
import {SignUp} from './views/SignUp'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
  </Router>
  );
}

export default App;