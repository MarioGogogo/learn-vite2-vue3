<template>
  <h1>我是测试</h1>
  <p>{{age}}----{{name}}---{{count}}</p>
  <p>{{state.age}}</p>
  <h1>Teleport</h1>
  <button @click="modalOpen = true">Open full Screen modal</button>
  <teleport to="body">
    <div class="modal" v-if="modalOpen">
      <div>
        telePort
        <button @click="modalOpen = false">Close Modal</button>
      </div>
    </div>
  </teleport>

  <hr />
  <p>鼠标位置：{{x}}----{{y}}</p>
  <hr />
  <child v-model:age="age" v-model:name="name" />
  <hr />
  <p>watch和watchEffect区别</p>
  <p>{{count}}</p>
</template>

<script>
import { reactive, ref, toRefs, watch, watchEffect,getCurrentInstance } from 'vue'
import Child from './Child.vue';
import useMousePositon from '../common/useMousePositon.js';
export default {
  name: "ToRef",
  components: {
    Child
  },
  setup () {
    const modalOpen = ref(false)
    const state = reactive({
      age: 20,
      name: "jack",
      count: "你好,"
    })

    const stateRef = toRefs(state)

    const { age, name, count } = stateRef

    setTimeout(() => {
      state.age++;
      state.count += 'i love you';
    }, 1500);

    watchEffect( () => {
        console.log('state.age :>> ', state.age);
         console.log('state.name :>> ', state.name);
    })

    watch(
      // 第一个参数要监听哪个属性
      () => state.count,
      // 第二个参数回调函数
      (count, prevCount) => {
       console.log('监听 :>> ', count, prevCount);
      }
    )


    const { x, y } = useMousePositon()

    return { modalOpen, state, age, name, count, x, y }

  }
}




</script>

<style scoped>
a {
  color: #42b983;
}
</style>