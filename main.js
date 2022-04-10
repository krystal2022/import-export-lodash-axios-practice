import _ from 'lodash' // From `node_modules`
import {getType, user} from './getType' // getType.js
import getRandom from './getRandom' // getRandom.js


console.log(_.camelCase('the hello world'))
console.log(user)
console.log(getType([1, 2, 3, 4]))
console.log(getRandom(), getRandom())



