// 额外部分

// ，Buffer是一个用于处理二进制数据的对象。它提供了一种在JavaScript中处理原始数据的方式，
// 而不需要像在浏览器中那样依赖于JavaScript的String类型

// Buffer对象的实例类似于整数数组，但它允许分配内存并直接与内存交互

// 你可以使用Buffer来创建、读取和写入二进制数据

// 创建一个包含字符串的Buffer
const buffer = Buffer.from('Hello World', 'utf8');

// console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

console.log(buffer.toString('utf8')); // Hello World