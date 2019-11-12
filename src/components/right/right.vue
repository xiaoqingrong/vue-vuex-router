<template>
    <div :class="this.$store.state.pullRight?'RightConShow':'RightConHide'">
        <div class="leftCol">
            <button @click="pullRight">
              <span :class="this.$store.state.isRightCon?'iconfont icon-jiantouyou':'iconfont icon-arrow-l'"></span>
            </button>
            <div class="actionLog">
              噜噜噜啦啦啦啦啦
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    pullRight(){
      this.$store.dispatch("pullRight");
      this.$store.dispatch("isRightCon");
    }
  },
  mounted(){
    localStorage.setItem("lll","ooo")
  }
}
</script> 

<style scoped lang="less">
@activeColor:#a4b9a2;
@defaultColor:#ffffff;
@Hfull:100%;
.RightConShow{
    position: absolute;
    top: 90px;
    right: 0;
    width: 20rem;
    height: 80%;
    z-index: 666;
    transition: 0.5s;
    background-color: rgba(121, 141, 149, 0.9);
}
.RightConHide{
    position: absolute;
    top: 90px;
    right: -17.5rem;
    width: 20rem;
    height: 80%;
    z-index: 666;
    transition: 0.5s;
    background-color: rgba(121, 141, 149, 0.9);
}
.leftCol{
  width: 13%;
  height: @Hfull;
  background-color: #798d79;

  button{
    width: 70%;
    height: 50px;
    margin: 20px auto;
    border-radius: 4px;
    background-color: @activeColor;
    color: @defaultColor;
    border: none;
    outline: none;
  }
}
/* 农事记录 */
.actionLog{
  width: 70%;
  /* height: 50px; */
  margin: 10px auto;
  border-radius: 4px;
  padding: 6px 0;
  background-color: @activeColor;
  color: @defaultColor;
}
</style>