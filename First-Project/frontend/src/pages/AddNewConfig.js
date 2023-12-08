import React, { useEffect, useState } from 'react';
import AddNewConfigModal from '../components/AddNewConfigModal';
import { getAllConfigs } from '../services/configs';

const AddNewConfig = () => {
    const [gameData, setGameData] = useState([])
    const title = '新增配置'
    const userId = '用户ID'
    const placeholder = '请输入ID'
    const type = '游戏'

    const gameDataList = (gameData.length > 0 && gameData[0] && gameData[0].content) || []

      const text = '生效周期'

      useEffect(() => {
        async function getConfig() {
          try {
            const res = await getAllConfigs();
            setGameData(res);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        getConfig();
      }, []);

    return (
      <>
        {gameDataList.length > 0 && (
            <AddNewConfigModal 
                title={title}
                userId={userId} 
                placeholder={placeholder}
                type={type}
                gameDataList={gameDataList}
                text={text}
            />
            )}

      </>
    );
  };
export default AddNewConfig;
