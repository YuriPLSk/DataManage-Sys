// 导包
import Vue from 'vue';
import Vuex from 'vuex';

// 引入子仓储
import TabStore from './tab';
import DeveloperInfo from './developerInfo';

// 声明
Vue.use(Vuex);

// 向外暴露总仓储
export default new Vuex.Store({
    modules:{
        TabStore,
        DeveloperInfo
    }
});
