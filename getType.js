export function getType(data){
    return Object.prototype.toString.call(data).slice(8, 1)
}
//default(기본) 문자가 붙지 않고, 함수에 이름이 있는 (getType) JS의 경우,
//1. main.js에 import {getType} 과 같이 중괄호 안에 이름이 들어가며
//2. 여기에 아래와 같이 여러가지 정보를 넣을 수 있다.

export const user ={
    name:'krystal',
    age: 20
}

export default 123