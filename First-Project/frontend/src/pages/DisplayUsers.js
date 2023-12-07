import React, { useEffect, useState } from 'react';
import { Space, Table, Tag,Button } from 'antd';
import { deleteUser, getAllUsers } from '../services/addConfig';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? '#FF69B4' : 'green';
          if (tag === 'loser') {
            color = '#4B0082';
          }
          if(tag === 'handsome'){
            color = '#7FFFD4';
          }
          if(tag === 'winner'){
            color = '#DC143C'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_,{_id}) => (
      <Space size="middle">
        <Button type='primary'>Update</Button>
        <Button   type="primary" danger onClick={() => deleteUserById(_id)}>Delete</Button>
      </Space>
    ),
  },
];

const deleteUserById = async (id) => {
            try{
                const result = await deleteUser(id)
                console.log('result',result);
            }catch(error){
                console.error('Error delete data:', error);
            }
        }

const DisplayUsers = () =>{ 
    const [data, setData] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const result = await getAllUsers()
                setData(result)
            }catch(error){
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    },[])

    return <Table columns={columns} dataSource={data} />
};
export default DisplayUsers;