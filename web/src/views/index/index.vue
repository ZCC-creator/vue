<template>
    <div>
        <!---会员--->
        <!-- <div id="children-view" :class="[show ? 'open' : '']">  -->
        <div id="children-view" :class="{open: show}"> 
            <router-view />
        </div>
        <!---汽车data渲染--->
        <!-- <Cars /> -->
        <!---地图--->
        <Map />
        <!---导航--->
        <Navbar />
        <!--- login-->
        <Login />
    </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar/index";
import Login from "./login.vue"
export default{
    name:"Index",
    components: {Map, Cars,Navbar, Login},
    data(){
        return{
            // show: false
        }
    },
    computed: {
        show(){
            const router = this.$route;
            return router.name ==="Index" ? false : true;
        }
    },
    mounted() {               /////控制用户界面的伸缩
        document.addEventListener('mouseup', (e) =>{
            const userCon = document.getElementById("children-view");
            if(userCon){
                if(!userCon.contains(e.target)) {
                    const routerName = this.$route.name;
                    if (routerName === "Index") { return false;
                        
                    }
                    this.$router.push({
                        name: "Index"
                    })
                }
            }
            
        })

    },
    watch: {
        // "$route" :{
        //     handler(newValue){
        //         const routerName = newValue.name;
        //         this.show = routerName === "Index" ? false : true;
        //         console.log(this.show)
        //     }
        // }
    }
}
</script>
<style lang="scss">
#children-view{    //会员页面宽度
    position: fixed;
    top: 0;
    bottom: 0;
    right: -600px;
    z-index:101 ;
    width: 350px;
    background-color: #34393f;
    @include webkit(transition, all .3s ease 0s);
    @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, .4));
    &.open{
        right: 0;
    }
}
</style>
