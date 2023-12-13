import {Modal, Image, Button} from 'antd'
import './css/takeoutFoodChooseModal.css'
import { useEffect, useState } from 'react'
import { getOrderById } from '../services/takeoutFood'

const TakeoutFoodChooseModal = ({id}) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    useEffect(() =>{
        async function getData(){
            const res = await getOrderById(id)
            setData(res)
            console.log('res',res);
        }
        getData()
        },[id])

    const openShoppingCar = () => {
        setShow(true)
    }
    const handleOk = () => {
        setShow(false)
    }
    const handleCancel = () => {
        setShow(false)
    }

    return <>
    <Button type='primary' onClick={openShoppingCar}>打开购物车</Button>
    <Modal open={show} onOk={handleOk} onCancel={handleCancel}>
    <h3>已选商品</h3>
      {data.map((food) => (
        <div key={food.id} className='food_choose'>
            <div className='food_choose_inner'>
            <img src={food.imageSrc} alt={food.name} />
            </div>
          <div>
            <div>
            <div>{food.name}</div>
            <div>价格: {food.price}</div>
            </div>
          </div>
        </div>
      ))}
    </Modal>
        </>

}
export default TakeoutFoodChooseModal