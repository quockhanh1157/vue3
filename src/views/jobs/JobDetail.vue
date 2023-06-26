<template>
  <p>Jobs Detail Page with id props: {{id}} - id Url: {{idURl}}</p>
</template>

<script>
export default {
  name: "JobDetail",
  props:['id'],
  data(){
    return{
      idURl:this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>