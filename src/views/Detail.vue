<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post" class="post">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import {ref} from "vue";
export default {
  name: "Detail",
  props:['id'],
  setup(props){
    const url = ref(`http://localhost:3000/posts/${props.id}`)

    const {post,error,load} = getPost(url.value)

    load()
    return {post,error}
  }
}
</script>

<style scoped>

</style>