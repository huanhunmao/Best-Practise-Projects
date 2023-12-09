import { useEffect, useState } from "react"
import { Button, Modal,Image,Rate, Radio  } from 'antd'
import './css/orderEvaluationModal.css'
import OrderInfo from "./OrderInfo"
import { getAllOrder } from "../services/order"

const OrderEvaluationModal = () => {
    const [show, setShow] = useState(false)
    const [rateValue, setRateValue] = useState(3)

    useEffect(() => {
        async function getOrder(){
           const res = await getAllOrder()
           console.log('res',res);
        }

        getOrder()
    },[])

    const handleClick = () => {
        setShow(true)
    }
    const handleOk = () => {
        setShow(false);
      };
      const handleCancel = () => {
        setShow(false);
      };
      const chooseClickBad = () => {

      }
      const chooseClickJustSo = () => {

      }
      const chooseClickGreat = () => {

      }
      const setValue = (e) => {
        setRateValue(e)
      }

    return (
        <>
        <Button type="primary" onClick={handleClick}>Open Order Evaluation</Button>
        <Modal open={show} onOk={handleOk} onCancel={handleCancel}>
            <h1>订单评价</h1>
            <OrderInfo 
            imgPath='../../public/images/pic1.png'
            typeName='骑手骑手骑手1'
            name='黄蒿'
            ifKnowName='是否匿名'
            knowName1={true}
            />
            <hr/>
            <div className="img">
                <Button onClick={chooseClickBad}>
                    <Image preview={false} src="../../public/images/pic3.png"/>
                    非常差
                </Button>
                <Button onClick={chooseClickJustSo}>
                    <Image preview={false} src="../../public/images/pic3.png"/>
                    一般
                </Button>
                <Button onClick={chooseClickGreat}>
                    <Image preview={false} src="../../public/images/pic3.png"/>
                    超赞
                </Button>
            </div>
            <hr/>
            <OrderInfo 
            imgPath='../../public/images/pic1.png'
            typeName='店家店家店家店家'
            name='杀猪粉'
            ifKnowName='是否匿名'
            knowName2={true}
            />

            <Rate value={rateValue} onChange={setValue} className="rate" allowHalf/>
        </Modal>
        </>
    )
}

export default OrderEvaluationModal