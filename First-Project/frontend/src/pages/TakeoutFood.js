import {Image,Button} from 'antd'
import './css/takeoutFood.css'
import { useState } from 'react'
import TakeoutFoodChooseModal from '../components/TakeoutFoodChooseModal'

const TakeoutFood = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <>
        <div className='food_info'>
            <Image src="xxx"/>
            <div>
            <div>name</div>
            <p>热销第几名</p>
            <p>主要原料:面粉,芝士</p>
            <p>月销量:xx</p>
            <p>价格:</p>
            </div>
            <Button onClick={handleClick}>选择{count}</Button>
        </div>
        <div className='food_info'>
            <Image src="xxx"/>
            <div>
            <div>name</div>
            <p>热销第几名</p>
            <p>主要原料:面粉,芝士</p>
            <p>月销量:xx</p>
            <p>价格:</p>
            </div>
        </div>
        <div className='food_info'>
            <Image src="xxx"/>
            <div>
            <div>name</div>
            <p>热销第几名</p>
            <p>主要原料:面粉,芝士</p>
            <p>月销量:xx</p>
            <p>价格:</p>
            </div>
        </div>
        <TakeoutFoodChooseModal/>
        </>
    )
}

export default TakeoutFood;