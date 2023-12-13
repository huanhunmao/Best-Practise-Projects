import {Image,Button} from 'antd'
import './css/takeoutFood.css'
import { useEffect, useState } from 'react'
import TakeoutFoodChooseModal from '../components/TakeoutFoodChooseModal'
import { getAllOrderData } from '../services/takeoutFood.js'

const TakeoutFood = () => {
    const [foodData, setFoodData] = useState([])
    const [id, setId] = useState(0)
    const [buttonStyles, setButtonStyles] = useState({})

    const handleClick = (id) => {  
        
        let updatedStyles = { ...buttonStyles };

        updatedStyles[id] = 'primary';

        setButtonStyles(updatedStyles);
    
        setId(id)
    }

    useEffect(() => {
        async function getData (){
           const res =  await getAllOrderData()
           setFoodData(res)
        }
        getData()
    },[])

    return (
        <>
        {foodData.map((food) => (
        <div key={food.id} className='food_info'>
          <img src={food.imageSrc} alt={food.name} />
          <div>
            <div>{food.name}</div>
            <p>热销第{food.hotRank}名</p>
            <p>主要原料: {food.ingredients}</p>
            <p>月销量: {food.monthlySales}</p>
            <p>价格: {food.price}</p>
            <Button onClick={() => handleClick(food.id)}>选择</Button>
          </div>
        </div>
      ))}
        <TakeoutFoodChooseModal id={id}/>
        </>
    )
}

export default TakeoutFood;