import { uniq } from 'lodash';//引入lodash中的uniq方法 该方法可以去重数组
import moment from 'moment';
import { Key,age,greet } from './src/config';
import User, { createUrl, gravatr } from './src/user'
//Key这里也可以as为Apikey
console.log(Key,age);

greet('ddd');

const arr = [1, 2, 2 ,34 ,123 ,123, 356];

console.log(uniq(arr));

const codecasts = new User('codecasts', 'i@codecasts.com');
const profile = createUrl(codecasts.name);
const image = gravatr(codecasts.email);
console.log('====================================');
console.log(codecasts);
console.log(profile);
console.log(image);
console.log('====================================');
