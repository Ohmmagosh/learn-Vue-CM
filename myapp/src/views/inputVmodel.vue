<template>
  <div app="inputVmodel">
    <h1>input V-model</h1>
    <form v-on:submit.prevent="submit">
      <!-- Firstname -->
      <div>
        <label for="">Firstname</label>
        <input type="text" name="first_name" v-model="applicant.first_name" />
      </div>
      <!-- Lastname -->
      <div>
        <label for="">Lastname</label>
        <input type="text" name="last_name" v-model="applicant.last_name" />
      </div>
      <!-- Dender -->
      <div>
        <label for="">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          v-model="applicant.gender"
        />
        <label for="">Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          v-model="applicant.gender"
        />
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
      <button type="button" @click="clear">Clear</button>
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
  },
};
</script>

<style></style>
