import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AnotherPage from './AnotherPage'; // Import the AnotherPage component

const App = () => {
  // Use the Router to wrap your component
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/another-page" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
};

const LoginForm = () => {
  const navigate = useNavigate(); // Hook to navigate between routes
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    navigate("/another-page"); // Navigate to AnotherPage on form submission
    setname("");
    setpassword("");
    
  };

  return (
    <div>
      <h1>To Do</h1>
      <h2>Reminds Everything</h2>
      <div id='login'>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            placeholder='Name' 
            value={name} 
            onChange={(e) => setname(e.target.value)} 
          />
          <br /><br />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setpassword(e.target.value)} 
          />
          <br /><br />
          <input id='sub' type="submit" />
        </form>
      </div>
    </div>
  );
};

export default App;
