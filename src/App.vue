<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>helloword</h1>
  <hello-world />
   
</template>

<script>
import {defineComponent} from 'vue';
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
    name:"Home",
    components:{
      HelloWorld,
    }
})
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>