import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Signup from './Signup.js';
// import Login from './Login.js'; // You'll need to create this
import Login from './component/login.js';
import Signup from './component/signup.js';
function App() {
  return (
    // <Login/>
    // <Signup/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;