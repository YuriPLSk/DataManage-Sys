import Vue from 'vue'


export default {
    state:{
        
        
    },
    // 反馈外界
    getters:{
        showDeveloperInfo(state){
            console.log('state:',state)
            return state.developerInfoList;
        }
    },
    // 操作自己
    mutations:{
        searchDeveloperInfo(state,param){
            Vue.set(state,"developerInfoList",param)
            console.log(11,state)
        }
    },
    // 存放异步操作
    actions:{

    }   
}