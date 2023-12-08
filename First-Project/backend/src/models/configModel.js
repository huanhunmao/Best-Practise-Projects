const configDatabase = require('./configList.mongo')

  async function saveConfigs(config) {
    await configDatabase.findOneAndUpdate({
    }, config, {
        upsert: true,
    })
}

async function getAllConfigs(){
    return await configDatabase.find({})
}
module.exports = {
    saveConfigs,
    getAllConfigs
}