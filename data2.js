//가져오기 내보내기
import _ from 'lodash' //From `node mudules`
import getType from './getType' //getType.js
import getRandom from './getRandom' //getRandom.js

console.log(_.camelCase('the hello world')) //theHelloWorld
console.log(getType([1, 2, 3])) //Array
console.log(getRandom(), getRandom())

// => 어떤 특정 내용을 한번만 내보내기를 한다면 export default
// => 내보내야 될 내용이 많으면 이름을 지정해야 되는 export 내보내기 하면된다.


//lodash
//uniqBy : 하나의 배열데이터에서 특정한 속성의 이름으로 고유화를 시켜주는 메소드
//unionBy : 합치기 전에 여러개의 배열데이터를 적어주고 맨 마지막에 그 배열데이터를 합칠때 고유화 작업을 시킬 속성의 이름을 명시하면 고유화가 됨
const usersA = [
  { userId: '1', name: 'Seyoung'},
  { userId: '2', name: 'Neo'}
]

const usersB = [
  { userId: '1', name: 'Seyoung'},
  { userId: '3', name: 'Amy'}  
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
// 0: {userId: '1', name: 'Seyoung'}
// 1: {userId: '2', name: 'Neo'}
// 2: {userId: '1', name: 'Seyoung'}
// 3: {userId: '3', name: 'Amy'}
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// 0: {userId: '1', name: 'Seyoung'}
// 1: {userId: '2', name: 'Neo'}
// 2: {userId: '3', name: 'Amy'}

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
// 0: {userId: '1', name: 'Seyoung'}
// 1: {userId: '2', name: 'Neo'}
// 2: {userId: '3', name: 'Amy'}


const users = [
  {userId: 'A', name: 'a'},
  {userId: 'B', name: 'b'},
  {userId: 'C', name: 'c'},
  {userId: 'D', name: 'd'},
  {userId: 'E', name: 'e'},
]

const foundUser = _.find(users, {name: 'c'})
const foundUserIndex = _.findIndex(users, {name: 'c'})
console.log(foundUser) //{userId: 'C', name: 'c'}
console.log(foundUserIndex) //2

_.remove(users, {name: 'a'})
console.log(users)
// 0: {userId: 'B', name: 'b'}
// 1: {userId: 'C', name: 'c'}
// 2: {userId: 'D', name: 'd'}
// 3: {userId: 'E', name: 'e'}


//JSON - 서버와의 통신에서 데이터를 주고받을때 하나의 포멧으로 사용
import myData from '/myData.json' //JSON파일은 하나의 문자데이터 파일

console.log(myData) //myData에 있는 데이터 그대로 노출됨

const a = {
  name: 'seyoung',
  age: 27,
  emails: [
    'jangse8931@naver.com',
    'jangse8931@gmail.com'
  ]
}
console.log('a', a) //a {name: 'seyoung', age: 27, emails: ["jangse8931@naver.com","jangse8931@gmail.com"]}

const str = JSON.stringify(a)
console.log('str', str) //{"name":"seyoung","age":27,"emails": ["jangse8931@naver.com","jangse8931@gmail.com"]}
console.log(typeof str) //string

const obj = JSON.parse(str)
console.log('obj', obj) //obj {name: 'seyoung', age: 27, emails: ["jangse8931@naver.com","jangse8931@gmail.com"]}
