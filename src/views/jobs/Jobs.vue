<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{
      name:'jobDetail',
      params:{id:job.id}}"
    >
      {{ job.detail }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        {title: "FrontEnd", id: 1, detail: "FrontEnd"},
        {title: "BackEnd", id: 2, detail: "BackEnd"},
        {title: "FullStack", id: 3, detail: "FullStack"}
      ]
    }
  }
}
</script>

<style scoped>

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>