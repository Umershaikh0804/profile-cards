import './App.css';
import ProfileCards from './components/ProfileCards';
import { useState } from 'react';

function App() {
  const [mainState, setMainState] = useState("I am from app.js component");

  return (
    <div className="App">
      <div>
        <h1>Profile Cards Project</h1>
        <div style={{ padding: "14px", flexWrap: "wrap" }}>
          <ProfileCards mainState={mainState} />
        </div>
      </div>
    </div>
  );
}

export default App;
