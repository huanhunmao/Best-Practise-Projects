import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNewConfig from './pages/AddNewConfig';
import AddNewUsers from './pages/AddNewUsers';
import DisplayUsers from './pages/DisplayUsers';
import ConfigGameList from './pages/ConfigGameList';
import OrderEvaluation from './pages/OrderEvaluation';

// 创建上下文
const SharedContext = React.createContext();

function App() {
    const [sharedState, setSharedState] = useState('');

    const handleUpdateState = (newState) => {
        setSharedState(newState);
      };
    
      const Home=  () =>  {
        return (
          <div>
            <AddNewUsers updateState={handleUpdateState} />
            <DisplayUsers sharedState={sharedState} updateState={handleUpdateState} />
          </div>
        );
      }

  return (
    <SharedContext.Provider value={{ sharedState, setSharedState }}>
    <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/config-game-list" element={<ConfigGameList />} />
    <Route path="/add-new-config" element={<AddNewConfig />} />
    <Route path="/order-evaluation" element={<OrderEvaluation />} />
  </Routes>
</Router>
    </SharedContext.Provider>
  );
}

export default App;
