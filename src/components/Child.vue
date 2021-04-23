<template>
      <div class="child">
         子组件
         <input type="text" :value="name" @input="$emit('update:name',$event.target.value)">
         <br>
         <input type="text" :value="age"  @input="$emit('update:age', Number($event.target.value))">
      </div>
</template>

<script>
export default {
    name:"child",
    props:{
       name:String,
       age:Number
    }
}
</script>

<style>

</style>