import slug from 'slug';
import md5 from 'md5';
import { url } from './config';

export default function User(name, email){
    return {
        name,
        email,
    };
}
//用slug自动把奇怪的用户名转换正常的
export function createUrl(name){
    return `${url}/user/${slug(name)}`;
}

export function gravatr(email){
    return `https://www.gravatar.com/avatar/${md5(email)}`;
}