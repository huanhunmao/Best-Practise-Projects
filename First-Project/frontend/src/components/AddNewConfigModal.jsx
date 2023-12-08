import React, { useState } from 'react';
import { Button, Modal,Input,DatePicker } from 'antd';
import './css/addConfig.css'
import { getUsersById } from '../services/users';
import ErrorFindUsers from './ErrorFindUsers';
import UerInfo from './UerInfo';

const AddNewConfigModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(false);
    const [userData, setUserData] = useState({});

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleInputBlur= async (id) => {
        const userId = id.target.value;
        try {
            const res = await getUsersById(userId);
            setUserData(res)
            
            if (res.error) {
                setError(true);
            }else{
                console.log('error',error);
                setError(false);
            }
          } catch (error) {
            console.error('Error fetching user:', error);
            setError(true);
          }
        };
    const onChange  = () => {

    }

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Config Modal
        </Button>
        <Modal title={props.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='modal-text'>
            <div className='user-id'>{props.userId}</div>
            <Input placeholder={props.placeholder} onBlur={handleInputBlur}/>
            { error && <ErrorFindUsers/>}
            {!error && <UerInfo {...userData}/>}
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

export default AddNewConfigModal;
