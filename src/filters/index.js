import Vue from 'vue' 
import * as filters from './filters'  //取出所有的  是一个对象

console.log(filters)
Object.keys(filters).forEach(key=>{
    console.log(key)
    Vue.filter(key,filters[key])
})