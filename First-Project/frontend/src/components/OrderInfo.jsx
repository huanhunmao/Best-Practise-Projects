import {Image,Radio} from 'antd'
import { useState } from 'react'

const OrderInfo = ({imgPath, typeName, name, ifKnowName, knowName1, knowName2}) => {
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(2)

    const onChange1 = (e)=> {
        setValue1(e.target.value)
    }
    const onChange2 = (e)=> {
        setValue2(e.target.value)
    }

    return (
        <>
                <div className="info">
                <div className="info_left">
                <Image width={10} src={imgPath}/>
                <div className="info_text">
                <p>{typeName}</p>
                <p>{name}</p>
                </div>
                </div>
                {knowName1 &&<div className="info_choose"><Radio checked={ifKnowName} onChange={onChange1} value={value1}>{ifKnowName}</Radio></div>}
               {knowName2 && <div className="info_choose"><Radio checked={ifKnowName} onChange={onChange2} value={value2}>{ifKnowName}</Radio></div>}
            </div>
        </>
    )
}

export default OrderInfo