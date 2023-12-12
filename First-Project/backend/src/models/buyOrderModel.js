const mongoose = require('mongoose');
const buyOrderDatabase = require('./buyOrderModel.mongo')
const {saveConfigs:saveConfig} = require('./buyUserModel')

const order = [
    {
      user_id: saveConfig._id, // 将 user_id 设置为 buyUser 文档的 _id
      "products": ["Product A", "Product B"],
      "total_amount": 150.00
    },
  ];
  

//   async function saveConfigs(config) {
//     const batchSize = 100; // 设置适当的批量大小
//     for (let i = 0; i < config.length; i += batchSize) {
//       const batch = config.slice(i, i + batchSize);
//       await buyOrderDatabase.insertMany(batch);
//     }
//   }

async function saveConfigs(items) {
    for (const item of items) {
        await buyOrderDatabase.findOneAndUpdate(
            { _id: item._id },
            item,
            { upsert: true }
        );
    }
}

async function getOrderAndUsers() {
    try {
        const res = await buyOrderDatabase.aggregate([
            {
                $lookup: {
                  from: 'buyusers',
                  localField: 'user_id',
                  foreignField: '_id',
                  as: 'user'
                }
              },
            {
                $unwind: '$user'
            },
            // 其他阶段...
            {
                $project: {
                    "_id": 1,
                    "user": {
                        "_id": "$user._id",
                        "name": "$user.name",
                        "email": "$user.email"
                    },
                    "products": 1,
                    "total_amount": 1
                }
            }
        ]);
        

        console.log('res', res);
        return res;
    } catch (error) {
        console.error('Error in getOrderAndUsers:', error);
        throw error;
    }
}

saveConfigs(order)

async function getAllConfigs(){
    return await buyOrderDatabase.find({})
}
module.exports = {
    saveConfigs,
    getAllConfigs,
    getOrderAndUsers
}