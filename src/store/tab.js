export default {
    state:{
        // 全部菜单
        menu:[],
        // 当前点击的菜单
        currentMenu:null,
        collapse:false,
        tabList:[
            {
                path: "/",
                label: "首页",
                icon: "s-home",
                name:"home"
            },
        ],
    },
    mutations:{
        selectMenu(state,val){
            if (val.label === '首页') {
                state.currentMenu = {};
            } else {
                let res = state.tabList.findIndex(item => item.name === val.name);
                res === -1 ? state.tabList.push(val) : null;
                state.currentMenu = val; 
            }
        },
        closeTab(state,val){
            let res = state.tabList.findIndex(item => item.name === val.name);
            state.tabList.splice(res,1)
        },
        // 菜单收缩
        collapseMenu(state){
            state.collapse = !state.collapse
        }
    },
    actions:{

    },

}