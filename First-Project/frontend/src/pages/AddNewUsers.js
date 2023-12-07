import React, { useState } from 'react';
import { Button, } from 'antd';
import AddUsersModal from "../components/AddUsersModal"

const AddNewUsers = ({updateState}) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const onOk = () => {
        setShow(false)
    }

    return (
        <div style={{marginRight:'100px',marginBottom:'10px'}}>
        <Button type="primary" onClick={handleClick}>Add New Users</Button>
        <AddUsersModal show={show} onOk={onOk} updateState={updateState}/>
        </div>
    )
}

export default AddNewUsers