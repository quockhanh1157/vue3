<template>
  <form @submit.prevent="handleSubmit">
    <h1>Signup Form Options API</h1>
    <br/>
    <label for="email">Email</label>
    <input type="email"
           placeholder="Email..."
           required
           v-model="email"
          id="email"
    >
    <label for="pass">Password</label>
    <input type="password"
           placeholder=""
           required
           v-model="password"
          id="pass"
    >
    <div v-if="passwordError.length" class="noti-error">{{passwordError}}</div>
    <label >Role:</label>
    <select v-model="role">
      <option value="dev">Web developer</option>
      <option value="desginer">Web desginer</option>
    </select>

    <div class="terms">
      <input id="check-box" type="checkbox" required v-model="term">
      <label for="check-box">Accept terms and conditions</label>
    </div>

    <div>
      <input id="company" type="checkbox" value="company" v-model="work">
      <label for="company">Company</label>
    </div>
    <div>
      <input id="school" type="checkbox" value="school" v-model="work">
      <label for="school">School</label>
    </div>

    <label for="skills">Skills</label>
    <input id="skills" type="text" v-model="tempSkill" @keyup="addSkills($event)">
    <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">
      <p>{{ skill }}</p>
    </div>

    <div class="submit">
      <button type="submit">Submit</button>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Term: {{ term }}</p>
  <p>School: {{ work }}</p>
  <p>Temp Skill: {{ tempSkill }}</p>
  <p>Skills: {{ skills }}</p>


</template>

<script>
export default {
  data() {
    return {
      email: "khanh@gmail.com",
      password: "",
      role: "dev",
      term: true,
      work: [],
      tempSkill: "",
      skills: [],
      passwordError:""
    }
  },
  methods: {
    addSkills(event) {
      if (event.code === 'Space' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skillDelete){
      this.skills = this.skills.filter(skill => skill !== skillDelete)
    },
    handleSubmit(){
      //validation pass
      this.passwordError = this.password.length > 5 ? "" : "Password must be at least 6 chars long"
      console.log(this.passwordError)
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
.pill > p{
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
.submit{
  text-align: center;
}
.noti-error{
  color: red;
  font-size: smaller;
  font-weight: bold;
}
</style>