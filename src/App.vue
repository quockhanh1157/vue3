<template>
  <button v-text="changeButton ? optionsAPI : compositionAPI"
          @click.prevent="changeButton = !changeButton"
  ></button>

  <SignupFormOptionsAPI v-if="changeButton"/>
  <SignupFormCompositionAPI v-if="!changeButton"/>

</template>

<script setup>
import SignupFormOptionsAPI from "@/components/SignupFormOptionsAPI.vue";
import {ref} from "vue";
import SignupFormCompositionAPI from "@/components/SignupFormCompositionAPI.vue";

const changeButton = ref(false)
const optionsAPI = ref("Options API")
const compositionAPI = ref("Composition API")
</script>

<style>
body {
  background-color: #555555;
}

button {
  background: #3c48b6;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin: auto;
}
</style>
