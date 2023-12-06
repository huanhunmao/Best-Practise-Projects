import React from 'react';
import AddNewConfigModal from '../components/AddNewConfigModal';

const AddNewConfig = () => {
    const title = '新增配置'
    const userId = '用户ID'
    const placeholder = '请输入ID'
    const type = '游戏'
    const gameData = [
        {
          "label": "大话西西",
          "value": 1,
          "key": "1"
        },
        {
          "label": "龟兔赛跑",
          "value": 2,
          "key": "2"
        }
      ]
      const text = '生效周期'

    return (
      <>
        <AddNewConfigModal 
        title={title}
        userId={userId} 
        placeholder={placeholder}
        type={type}
        gameData={gameData}
        text={text}
        />
      </>
    );
  };
export default AddNewConfig;
