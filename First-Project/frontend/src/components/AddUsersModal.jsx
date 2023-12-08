import { Modal,Input, } from 'antd';
import { addNewUser,getAllUsers, updateUser } from '../services/users';
import React, { useState } from 'react';

const AddUsersModal = (props) => {
    const {modalData}  = props;
    const [id,setId] = useState(modalData&&modalData.id)
    const [name,setName] = useState(modalData&&modalData.name)
    const [email,setEmail] = useState(modalData&&modalData.email)
    const [tags,setTags] = useState(modalData&&modalData.tags)

    const handleOk = async () => {
        if(props.update){
            await updateUser({_id:modalData._id,id,name,email,tags})
        }else{
            await addNewUser({id,name,email,tags})
        }
        const result = await getAllUsers()
        props.updateState(result)
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

    const handleChangeTags = (e) => {
        setTags(e.target.value.split(','))
    }

    return (
        <Modal  title="Add New Users" open={props.show} onOk={handleOk} onCancel={props.onOk} >
            <div>
                <p>ID</p>
                <Input placeholder='请输入 ID' value={id} onChange={handleChangeId} disabled={props.update}/>
            </div>
            <div>
                <p>Name</p>
                <Input placeholder='请输入 姓名' value={name} onChange={handleChangeName}/>
            </div>
            <div>
                <p>Email</p>
                <Input placeholder='请输入 邮箱' value={email} onChange={handleChangeEmail}/>
            </div>
            <div>
                <p>Tags</p>
                <Input placeholder='请输入 标签' value={tags} onChange={handleChangeTags}/>
            </div>
        </Modal>
    )
}

export default AddUsersModal