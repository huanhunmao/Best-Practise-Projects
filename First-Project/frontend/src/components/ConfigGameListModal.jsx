import { Button, Select, Modal, Input } from 'antd'
import { useState } from 'react';
import { createNewConfig } from '../services/configs';

const ConfigGameListModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('')

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = async() => {
        await createNewConfig({ type:value, content:inputValue })
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const handleSelected = (e) => {
        setValue(e)
      }

      const inputChange = (e) => {
        setInputValue(e.target.value)
      }

    return (
        <>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
        <Modal title="新增列表" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <h4>类型</h4>
            <Select
            defaultValue="1"
            style={{ width: 120 }}
            value={value}
            onSelect={handleSelected}
            options={[
                { value: '1', label: '游戏' },
                { value: '2', label: '娱乐' },
                { value: '3', label: '体育' },
              ]}
            />
            <h4>内容</h4>
            <Input.TextArea value={inputValue} onChange={inputChange}/>
        </Modal>
        </>
    )
}

export default ConfigGameListModal