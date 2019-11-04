//export 可导出各种变量和函数

const apikey = 'abc123';
const age = 12;
export const url = "https://codecasts.com";
function greet(name){
    console.log('====================================');
    console.log(`Hello ${name}!`);
    console.log('====================================');
}

//多个导出
export { apikey as Key, age, greet};