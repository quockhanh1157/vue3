<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{
      name:'jobDetail',
      params:{id:job.id}}"
      >
        {{ job.detail }}
      </router-link>
    </div>
  </div>
  <div v-else>
    <Loading>
      <template v-slot:detail>
        <p>Loading for jobs...</p>
      </template>
    </Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "Jobs",
  components: {Loading},
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    setTimeout(()=>{
      fetch("http://localhost:3000/jobs")
          .then((res) => res.json())
          .then((data) => this.jobs = data)
          .catch((err) => console.log(err.message))
    },5000)
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