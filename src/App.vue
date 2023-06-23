<template>
  <p>Project vue3</p>
  <button @click="start" :disabled="isPlaying">Play</button>
  <br/>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="!isPlaying" :score="score"/>
</template>

<script setup>

import {ref} from "vue";
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";

const isPlaying = ref(false)
const delay = ref(null)
const score = ref(0)
function start(){
  delay.value = 2000 + Math.random() * 5000;
  isPlaying.value = true

  console.log(delay.value)
}
function endGame(reactionTimer){
  score.value = reactionTimer.value
  isPlaying.value = false
}
</script>

<style>

</style>
