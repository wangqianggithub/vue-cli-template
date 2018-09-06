import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//服务条款
const moduleTest = {
    state: {
        flag: false
    },
    mutations: {
        //一个test模块
        testFlag(state, payload) {
            state.flag = payload;
        }
    }
};

let store = new Vuex.Store({
    modules: {
        moduleTest
    }
});

export default store;

/*

vuex提交：
this.$store.commit('testFlag', pload);

vuex获取：
computed: {
    //记录前一页是哪个套餐
    getCM: function () {
        return this.$store.state.moduleTest.flag;
    }
},

 */
