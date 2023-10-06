import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
        <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png'></img>
        <p>Replace the starter code in this template with something cool</p>
        <Login />
        <div className="Routes">
            <Router>
            <Routes>
                <Route path= />
                <Route path= />
                <Route path= />
            </Routes>
            </Router>
        </div>
    );
    </div>
  );
}

export default App;
