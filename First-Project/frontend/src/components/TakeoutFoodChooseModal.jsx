import {Modal, Image, Button} from 'antd'
import './css/takeoutFoodChooseModal.css'
import { useState } from 'react'

const TakeoutFoodChooseModal = () => {
    const [show, setShow] = useState(false)

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
    <div className='food_choose'>
        <div className='food_choose_inner'>
        <Image src="xxx" />
        <div>
        <div>name111111</div>
        <div>price:222</div>
        </div>
        </div>
        <div>数量:xxx</div>
    </div>
    </Modal>
        </>

}
export default TakeoutFoodChooseModal