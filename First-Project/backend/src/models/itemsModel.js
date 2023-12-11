const itemsModelDatabase = require('./itemsModel.mongo')

const items = [
    {
      item: 'journal',
      qty: 25,
      size: { h: 14, w: 21, uom: 'cm' },
      status: 'C'
    },
    {
      item: 'notebook',
      qty: 50,
      size: { h: 8.5, w: 11, uom: 'in' },
      status: 'E'
    },
    {
      item: 'paper',
      qty: 100,
      size: { h: 8.5, w: 11, uom: 'in' },
      status: 'D'
    },
    {
      item: 'planner',
      qty: 75,
      size: { h: 22.85, w: 30, uom: 'cm' },
      status: 'D'
    },
    {
      item: 'postcard',
      qty: 45,
      size: { h: 10, w: 15.25, uom: 'cm' },
      status: 'A'
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
    // 1 全部查到 和这个一样 SQL SELECT * FROM inventory
    // return await itemsModelDatabase.find({})

    // 2 找 status  D 
    // return await itemsModelDatabase.find({ status: 'D' });

    // 3 找 status A 和 D 
    // return await itemsModelDatabase.find({ status:{ $in:['A','D']} });

    // 4 找 status A qty 小于 30 
    // return await itemsModelDatabase.find({ status:'A', qty: {$lt: 100} });

    // 5 status equals "A" or qty is less than ($lt) 30:
    // return await itemsModelDatabase.find({$or:[{status:'A'}, {qty:{$lt:30}}] });

    // 6 the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p:
    // return await itemsModelDatabase.find({$or:[{status:'A'}, {qty:{$lt:30}},{item: {$regex:'^p'}}] });

    // 7 where the field uom nested in the size field equals "in":
    // return await itemsModelDatabase.find({ 'size.h': {$lt: 15} });

    // 8 h is less than 15, the nested field uom equals "in", and the status field equals "D":
//     return await itemsModelDatabase.find({
//         'size.h': {$lt: 15},
//         'size.uom':'in',
//         status:'D'
//         });
// }

    // 9 直接查 
    return await itemsModelDatabase.find({
        size: { h: 14, w: 21, uom: 'cm' }
    })

}
  module.exports = {
    saveItems,
    getItems,
  };