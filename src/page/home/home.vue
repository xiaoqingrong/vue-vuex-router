<template>
    <div>
        <Header></Header>
        <Body></Body>
    </div>
</template>
<script>
import {Drawer} from 'view-design'
import Header from '../../components/header/header';
import Body from '../../components/content/body';
export default {
    name:"home",
    data(){
        return{
            
        }
    },
    components:{
        Header,
        Body
    }
}
</script>
<style scoped>

</style>