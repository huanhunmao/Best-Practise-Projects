import { useEffect, useState } from "react"
import { Button, Modal,Image,Rate, Radio  } from 'antd'
import './css/orderEvaluationModal.css'
import OrderInfo from "./OrderInfo"
import { getAllOrder } from "../services/order"

const OrderEvaluationModal = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({
        riderName: { img: undefined, typeName: undefined, name: undefined },
        isAnonymous: undefined,
        evaluate: undefined,
        itemName: { img: undefined, typeName: undefined, name: undefined },
        ratings: 0, // or whatever default value you want
      });
      
    const {riderName, isAnonymous, evaluate, itemName, ratings} = data

    useEffect(() => {
        async function getOrder(){
           const res = await getAllOrder()
           console.log('res',res[0]);
           setData(res[0])
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
      }
      const getRightEvaluate = () => {
        return 'primary'
      }

    return (
        <>
        <Button type="primary" onClick={handleClick}>Open Order Evaluation</Button>
        <Modal open={show} onOk={handleOk} onCancel={handleCancel}>
            <h1>订单评价</h1>
            <OrderInfo 
            imgPath={riderName.img}
            typeName={riderName.typeName}
            name={riderName.name}
            ifKnowName='是否匿名'
            knowName1={isAnonymous}
            />
            <hr/>
            <div className="img">
                <Button onClick={chooseClickBad} type={evaluate=== 1 &&getRightEvaluate()}>
                    <Image preview={false} src={"../../public/images/pic3.png"}/>
                    非常差
                </Button>
                <Button onClick={chooseClickJustSo} type={evaluate=== 2 &&getRightEvaluate()}>
                    <Image preview={false} src="../../public/images/pic3.png"/>
                    一般
                </Button>
                <Button onClick={chooseClickGreat} type={evaluate=== 3 &&getRightEvaluate()}>
                    <Image preview={false} src="../../public/images/pic3.png"/>
                    超赞
                </Button>
            </div>
            <hr/>
            <OrderInfo 
            imgPath={itemName.img}
            typeName={itemName.typeName}
            name={itemName.name}
            ifKnowName='是否匿名'
            knowName2={isAnonymous}
            />
            <Rate value={ratings} onChange={setValue} className="rate" allowHalf/>
        </Modal>
        </>
    )
}

export default OrderEvaluationModal