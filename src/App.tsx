import React, { useCallback, useState } from 'react';
import './App.css';

import {MissionContainer} from './components/Launch/index';
import InfoContainer from './components/LaunchDetails/index';

const App = () => {

  const [id, setId] = useState(0);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div>
   
    <div className="App">
      <MissionContainer handleIdChange={handleIdChange} />
     <InfoContainer id={id}/>
    </div>
    </div>
  );
}

export default App;