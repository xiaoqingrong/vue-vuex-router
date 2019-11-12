<template>
    <div>
        <button @click="loged">登录成功</button>
    </div>
</template>
<script>
export default {
    name:"login",
    methods:{
        loged(){
            this.$router.push("/land")
        }
    }
}
</script>
<style scoped>
button{
    margin: 50px auto;
    width: 40vw;
    height: 10vh;
}
</style>