const itemsModelDatabase = require('./itemPluModel.mongo')

const items = [
    {
      item: 'journal',
      qty: 25,
      tags: ['blank', 'red'],
      dim_cm: [14, 21]
    },
    {
      item: 'notebook',
      qty: 50,
      tags: ['red', 'blank'],
      dim_cm: [14, 21]
    },
    {
      item: 'paper',
      qty: 100,
      tags: ['red', 'blank', 'plain'],
      dim_cm: [14, 21]
    },
    {
      item: 'planner',
      qty: 75,
      tags: ['blank', 'red'],
      dim_cm: [22.85, 30]
    },
    {
      item: 'postcard',
      qty: 45,
      tags: ['blue'],
      dim_cm: [10, 15.25]
    }
  ]

  async function saveItems(items) {
    for (const item of items) {
        await itemsModelDatabase.findOneAndUpdate(
            { item: item.item },
            item,
            { upsert: true }
        );
    }
}


saveItems(items)

async function getItems(){
    // 1  tags value is an array with exactly two elements, "red" and "blank
    // return await itemsModelDatabase.find({
    //     tags:['red', 'blank']
    // })

    // 2 
    // return await itemsModelDatabase.find({
    //     tags:{ $all: ['red', 'blank']}
    // })

    // 3 
    // return await itemsModelDatabase.find({
    //     tags: 'red'
    // })

    // 4
    //  return await itemsModelDatabase.find({
    //     dim_cm: {$gt: 25}
    // })

    // 5 
    //    return await itemsModelDatabase.find({
    //     dim_cm: {$gt: 15, $lt:20}
    // })

    // 6 同时满足 才行
        return await itemsModelDatabase.find({
        dim_cm:{$elemMatch: {$gt: 22, $lt:30}}
    })
}
  module.exports = {
    saveItems,
    getItems,
  };