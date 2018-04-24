const monk = require("monk");

//链接到库
const db = monk('localhost:27017/test');

//表集合
let container = {
	tests: db.get('test')	//测试表
};

// const tests = db.get('test');
// tests.find({},(err, ducs)=>{
// 	console.log(ducs);
// });

module.exports = container;