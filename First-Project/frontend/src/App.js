import 'antd/dist/antd.css';
import AddNewConfig from './pages/AddNewConfig';
import AddNewUsers from './pages/AddNewUsers';
import DisplayUsers from './pages/DisplayUsers';
import React, { useState } from 'react';
import ConfigGameList from './pages/ConfigGameList';

// 创建上下文
const SharedContext = React.createContext();

function App() {
    const [sharedState, setSharedState] = useState('');

    const handleUpdateState = (newState) => {
        setSharedState(newState);
      };

  return (
    <SharedContext.Provider value={{ sharedState, setSharedState }}>
        <ConfigGameList/>
        <div style={{display:'flex',justifyContent:'flex-end',margin:'20px'}}>
        <AddNewUsers updateState={handleUpdateState}/>
        <AddNewConfig/>
        </div>
         <DisplayUsers sharedState={sharedState} updateState={handleUpdateState}/>
    </SharedContext.Provider>
  );
}

export default App;
