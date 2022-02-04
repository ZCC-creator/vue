<template>
      <div class="user-container"> 
          <back column="安全设置" />       
        <ul class="group-links">
             <router-link to="/password" tag="a" class="arrow">
                修改登陆密码               
            </router-link> 
              <router-link to="aa" tag="a" class="arrow">
                设置权限密码
            </router-link>
             <router-link to="aa" tag="a" class="arrow">
                绑定手机号
            </router-link>
             <router-link to="aa" tag="a" class="arrow">
                xxxxxxxx
            </router-link>
             <router-link to="aa" tag="a" class="arrow">
                xxxxxxxx
            </router-link> 
        </ul> 
    </div>
</template>
<script>
import Back from '../../components/back/back.vue'
export default{
    name:"User",
    components: {Back},
    data(){
        return{}
    }
}
</script>
<style lang="scss">

</style>
