const ordersDatabase = require('./orderModel.mongo')

const order = {
    riderName: 
        {typeName:'骑手评分', name:'PPX',img:'xxx'},
    itemName:
        {typeName:'店家', name:'杀猪粉',img:'xxx'},
    isAnonymous: true,
    evaluate: 3,
    ratings:  4.5,
}

  async function saveOrders(order) {
    await ordersDatabase.findOneAndUpdate({
    }, order, {
        upsert: true,
    })
}

saveOrders(order)

async function getOrders(){
    return await ordersDatabase.find({})
}

  module.exports = {
    saveOrders,
    getOrders,
  };