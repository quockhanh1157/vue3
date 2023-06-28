<template>
  <div class="home">
    Home
  </div>
  <input type="text" v-model="search">
  <p>Search term - {{search}}</p>
  <div v-for="name in filterName" :key="name">{{name}}</div>

</template>

<script>
import {ref,computed} from "vue";

export default {
  name: 'HomeView',
  components: {},
  setup(){
    const names = ref(['html',"css","java","react","vue"])
    const search = ref('')

    const filterName = computed(()=>{
      return names.value.filter(name => name.includes(search.value))
    })

    return {names,search,filterName}
  },
}
</script>
