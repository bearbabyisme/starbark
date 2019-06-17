<template>
    <div>
        <Header title="搜索"/>
        
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['getUserInfo'])
    },
    created(){
        this.getUserInfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>