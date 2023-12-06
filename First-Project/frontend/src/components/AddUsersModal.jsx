import { Modal,Input, } from 'antd';
import { addNewUser } from '../services/addConfig';
import { useState } from 'react';

const AddUsersModal = (props) => {
    const [id,setId] = useState(null)
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)

    const handleOk = async () => {
        await addNewUser({id,name,email})
        props.onOk()
    }

    const handleChangeId = (e) => {
        setId(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <Modal  title="Add New Users" open={props.show} onOk={handleOk} onCancel={props.onOk} >
            <div>
                <p>ID</p>
                <Input placeholder='请输入 ID' value={id} onChange={handleChangeId}/>
            </div>
            <div>
                <p>Name</p>
                <Input placeholder='请输入 姓名' value={name} onChange={handleChangeName}/>
            </div>
            <div>
                <p>Email</p>
                <Input placeholder='请输入 邮箱' value={email} onChange={handleChangeEmail}/>
            </div>
        </Modal>
    )
}

export default AddUsersModal