<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Jobs Detail Page with id props: {{ id }} - id Url: {{ idURl }}</p>

    <p>{{ job.detail }}</p>
  </div>
  <div v-else>
    <Loading>
      <template v-slot:detail>
        <p>Loading for detail...</p>
      </template>
    </Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  name: "JobDetail",
  components: {Loading},
  props: ['id'],
  data() {
    return {
      idURl: this.$route.params.id,
      job: null
    }
  },
  mounted() {
    setTimeout(()=>{
      fetch(`http://localhost:3000/jobs/${this.id}`)
          .then((res) => res.json())
          .then((data) => this.job = data)
          .catch((err) => console.log(err.message))
    },5000)
  }
}
</script>

<style scoped>

</style>