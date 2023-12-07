import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { getAllUsers } from '../services/addConfig';
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
    render: (_,) => (
      <Space size="middle">
        <a>Update</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
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