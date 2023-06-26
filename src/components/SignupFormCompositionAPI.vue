<template>
  <form @submit.prevent="handleSubmit">
    <h1>Signup Form Options API</h1>
    <br/>
    <label for="email">Email</label>
    <input type="email"
           placeholder="Email..."
           required
           v-model="info.email"
           id="email"
    >
    <label for="pass">Password</label>
    <input type="password"
           placeholder=""
           required
           v-model="info.password"
           id="pass"
    >
    <div v-if="info.passwordError.length" class="noti-error">{{ info.passwordError }}</div>
    <label>Role:</label>
    <select v-model="info.role">
      <option value="dev">Web developer</option>
      <option value="desginer">Web desginer</option>
    </select>

    <div class="terms">
      <input id="check-box" type="checkbox" required v-model="info.term">
      <label for="check-box">Accept terms and conditions</label>
    </div>

    <div>
      <input id="company" type="checkbox" value="company" v-model="info.work">
      <label for="company">Company</label>
    </div>
    <div>
      <input id="school" type="checkbox" value="school" v-model="info.work">
      <label for="school">School</label>
    </div>

    <label for="skills">Skills</label>
    <input id="skills" type="text" v-model="info.tempSkill" @keyup="addSkills($event)">
    <div v-for="skill in info.skills" :key="skill" class="pill" @click="deleteSkill(skill)">
      <p>{{ skill }}</p>
    </div>

    <div class="submit">
      <button type="submit">Submit</button>
    </div>
  </form>
  <p>Email: {{ info.email }}</p>
  <p>Password: {{ info.password }}</p>
  <p>Role: {{ info.role }}</p>
  <p>Term: {{ info.term }}</p>
  <p>School: {{ info.work }}</p>
  <p>Temp Skill: {{ info.tempSkill }}</p>
  <p>Skills: {{ info.skills }}</p>


</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const email = ref("khanh@gmail.com")
    const password = ref("")
    const role = ref("dev")
    const term = ref(true)
    const work = ref([])
    const tempSkill = ref("")
    const skills = ref([])
    const passwordError = ref("")

    const info = ref({
      email: "khanh@gmail.com",
      password: "",
      role: "dev",
      term: true,
      work: [],
      tempSkill: "",
      skills: [],
      passwordError: ""
    })

    function addSkills(event) {
      if (event.code === 'Space' && info.value.tempSkill) {
        if (!info.value.skills.includes(info.value.tempSkill)) {
          info.value.skills.push(info.value.tempSkill)
        }
        info.value.tempSkill = ''
      }
    }

    function deleteSkill(skillDelete) {
      info.value.skills = info.value.skills.filter(skill => skill !== skillDelete)
    }

    function handleSubmit() {
      //validation pass
      info.value.passwordError = info.value.password.length > 5 ? "" : "Password must be at least 6 chars long"
      console.log(info.value.passwordError)
    }

    return {
      email, password, role, term, work, tempSkill, skills, passwordError,
      addSkills, deleteSkill, handleSubmit, info
    }
  }
}


</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.pill > p {
  margin: 0;
}

button {
  background: #3c48b6;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.submit {
  text-align: center;
}

.noti-error {
  color: red;
  font-size: smaller;
  font-weight: bold;
}
</style>