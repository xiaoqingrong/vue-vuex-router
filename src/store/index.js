import Vue from 'vue';  //引入vue
import Vuex from 'vuex';    //引入vuex
// 使用vuex
Vue.use(Vuex);

// 创建vue实例
const store = new Vuex.Store({
    //state
    state:{
        count:true,
        desc:20,
        isleftCon:true,
        isPull:true,
        pullRight:false,
        isRightCon:false,
        userLocation:{log:106.674149,lat:39.085012}
    },
    //getters
    getters:{ //计算后的值，和computed差不多，参与计算，但是并不是改变state
        getStateCount(state){
            return state.count+1;
        }
    },
    mutations:{
        add(state){//上面定义的state对象
            state.count = state.count+1;
        },
        reduction(state,n){//上面定义的state对象
            state.count = state.count-n;
        },
        isleftCon(state){
            state.isleftCon = !state.isleftCon
        },
        isPull(state){
            state.isPull = !state.isPull
        },
        pullRight(state){
            state.pullRight = !state.pullRight
        },
        isRightCon(state){
            state.isRightCon = !state.isRightCon
        }
    },
    //但是官方不建议我们直接去修改store里面的值，而是让我们去提交一个action,在action中提交mutation再去修改状态值，
    //接下来我们修改index.js文件，先定义actions提交mution的函数
    actions:{
        addFun(context){
            context.commit("add");
        },
        reductionFun(context,n){
            context.commit("reduction",n)
        },
        isleftCon(context){
            context.commit("isleftCon")
        },
        isPull(context){
            context.commit("isPull")
        },
        pullRight(context){
            context.commit("pullRight")
        },
        isRightCon(context){
            context.commit("isRightCon")
        }
    }
    //然后去修改之前的方法
    //所以这里把commit提交mutation修改为使用dispatch来提交actions。action再commit提交给mutation

    // 这里完整的vuex修改状态值的完整流程。
    // 如果我们需要指定加减的数值，那么我们需要直接传入dispatch中的第二个参数，
    // 然后在actions中的对应函数中接受参数在传递给mutation中的函数进行计算
// ---------------------------------------------------------------------------------------
    // mapState、mapGetters、mapActions
    // 如果我们不喜欢这种在页面上使用“this.$stroe.state.count”和
    // “this.$store.dispatch('funName')”这种很长的写法，那么我们
    // 可以使用mapState、mapGetters、mapActions就不会这么麻烦了；
})

export default store    //导出store