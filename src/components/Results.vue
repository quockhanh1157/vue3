<template>
  <p>Score {{props.score}}ms - rank {{rank}}</p>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

const props = defineProps({
  score:Number
})
const rank = ref(null)

onMounted(()=>{
  if (props.score < 250) {
     rank.value = 'Ninja Fingers'
  } else if (props.score < 1000) {
     rank.value = 'Rapid Reflexes'
  } else {
    rank.value = 'Snail pace...'
  }
    console.log("DOM results")
})
onUpdated(()=>{
  console.log("Update DOM results")
})
onUnmounted(()=>{
  console.log("Clear DOM results")
})
</script>

<style scoped>

</style>