import {ref,onMounted,onUnmounted} from 'vue';


export default function useMousePosition(){
    const x = ref(0)
    const y = ref(0)

    function update(e){
       x.value = e.pageX
       y.value = e.pageY
    }

    onMounted(()=>{
      console.log('%c 🍩 useMousePosition-onMounted: ', 'font-size:20px;background-color: #42b983;color:#fff;');
      window.addEventListener('mousemove',update)
    })


    onUnmounted(()=>{
      window.removeEventListener('mousemove',update)
    })




    return {x,y}
}


