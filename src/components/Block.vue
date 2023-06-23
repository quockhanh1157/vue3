<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me {{props.delay}} {{reactTimer}}
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

const props = defineProps({
  delay:Number
})
const showBlock = ref(false)
const timer = ref(null)
const reactTimer = ref(0)
const emit = defineEmits(['end'])

onMounted(()=>{
  console.log("DOM block")
  setTimeout(()=>{
    showBlock.value = true
    console.log(showBlock)
    startTimer()
  },props.delay)
})
onUpdated(()=>{
  console.log(`Update DOM block reactTimer - ${reactTimer.value}`)
})
onUnmounted(()=>{
  console.log("Clear DOM block")
})

function startTimer(){
  timer.value = setInterval(()=>{
    reactTimer.value+=10
  },10)
}
function stopTimer(){
  clearInterval(timer)
  emit('end',reactTimer)
}
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>