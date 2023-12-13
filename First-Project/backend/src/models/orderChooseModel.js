const orderChooseModel = require('./orderChooseModel.mongo')

const foodData = [
    {
      id: 1,
      imageSrc: 'xxx1',
      name: '美味食物1',
      hotRank: 1,
      ingredients: '面粉,芝士',
      monthlySales: 100,
      price: 10,
    },
    {
      id: 2,
      imageSrc: 'xxx2',
      name: '美味食物2',
      hotRank: 2,
      ingredients: '肉,蔬菜',
      monthlySales: 150,
      price: 15,
    },
    {
      id: 3,
      imageSrc: 'xxx3',
      name: '美味食物3',
      hotRank: 3,
      ingredients: '鱼,米饭',
      monthlySales: 80,
      price: 8,
    },
  ];
  
  async function saveOrderItems(items) {
    for (const item of items) {
        await orderChooseModel.findOneAndUpdate(
            { id: item.id },
            item,
            { upsert: true }
        );
    }
}


saveOrderItems(foodData)

async function getOrderItems(){
    return await orderChooseModel.find({
    })

}

async function existsOrderWithIds(id) {
    if(!id){
        return false;
    }

     return await orderChooseModel.find({
        id
    });
}

  module.exports = {
    saveOrderItems,
    getOrderItems,
    existsOrderWithIds
  };