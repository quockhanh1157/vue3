<template>
  <div class="blog">
    <h1>Blog</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostLis :posts="posts"/>
    </div>
    <div v-else>
      Loading....
    </div>
  </div>
</template>

<script>
import PostLis from "@/components/PostLis.vue";
import getPosts from "@/composables/getPosts";
import {ref} from "vue";

export default {
  name: 'index',
  components: {PostLis},
  setup() {
    const url = ref("http://localhost:3000/posts")
    const {posts,error,load} = getPosts(url.value)
    setTimeout(()=>{
      load()
    },5000)

    return {posts,error}
  }
}
</script>

<style>

</style>