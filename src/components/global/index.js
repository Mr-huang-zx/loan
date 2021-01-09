import Vue from 'vue'

const componentsContext = require.context('./',true,/\.js$/)

componentsContext.keys().forEach(component=>{
    const componentConfig = componentsContext(component)
    const ctrl = componentConfig.default || componentConfig

    if(ctrl && ctrl.name){
        Vue.component(ctrl.name,ctrl)
    }
})