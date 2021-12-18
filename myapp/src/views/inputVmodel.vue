<template>
  <div app="inputVmodel">
    <h1>input V-model</h1>
    <form v-on:submit.prevent="submit">
      <!-- Firstname -->
      <div>
        <label for="">Firstname</label>
        <input type="text" name="first_name" v-model.trim="applicant.first_name" />
      </div>
      <!-- Lastname -->
      <div>
        <label for="">Lastname</label>
        <input type="text" name="last_name" v-model.trim="applicant.last_name"/>
      </div>
      <!-- Dender -->
      <div>
        <label for="">Male</label>
        <input type="radio" name="gender" value="male" v-model="applicant.gender"/>
        <label for="">Female</label>
        <input type="radio" name="gender" value="female" v-model="applicant.gender"/>
      </div>
      <!-- age -->
      <div>
          <label for="">age</label>
          <input type="number" v-model.number="applicant.age">
      </div>
      <!-- Courses -->
      <div>
        <label for="">Course</label>
        <select name="courses" v-model="applicant.courses">
          <option value="Html">Html</option>
          <option value="Css">Css</option>
          <option value="React">React</option>
          <option value="Nodejs">Nodejs</option>
        </select>
      </div>
      <!-- button -->
      <button type="button" @click.exact="clear" @click.alt="useDefualt">Clear</button>
      <button type="submit">Submit</button>
    </form>
    <div style="margin-top: 16px; color: red">
      #Spy {{ JSON.stringify(applicant) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "inputVmodel",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        gender: "",
        courses: "",
        age: 0
      },
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {};
    },
    useDefualt(){
      this.applicant={
        first_name: "UNKNOWN",
        last_name: "UNKNOWN",
        gender: "male",
        courses: "Html",
        age: 10
      }
    }
  },
};
</script>

<style></style>
