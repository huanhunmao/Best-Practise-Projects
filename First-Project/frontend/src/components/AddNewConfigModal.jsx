import React, { useState } from 'react';
import { Button, Modal,Input,DatePicker,Alert } from 'antd';
import './css/addConfig.css'
import { getUsersById } from '../services/addConfig';

const AddNewConfigModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title={props.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='modal-text'>
            <div className='user-id'>{props.userId}</div>
            <Input placeholder={props.placeholder} onChange={handleInputChange}/>
            </div>
          <div>
            {props.gameData.map((item, index) => (
                <div className='time-select' key={index}>
                <div>
                <span>{props.type}{item.value}:</span>
                <span>{item.label}</span>
                </div>
                <div className='time-choose'>
                <div className='game-label'>{props.text}</div>
                <DatePicker onChange={onChange} />
                </div>
                </div>
            )
            )}
          </div>
        </Modal>
      </>
    );
  };

  const onChange  = () => {

  }

  const handleInputChange = async (id) => {
    const res = await getUsersById(id)
    console.log('res',res);

    if(res === undefined){
        return <Alert message="Error Text" type="error" />
    }
  }
export default AddNewConfigModal;
