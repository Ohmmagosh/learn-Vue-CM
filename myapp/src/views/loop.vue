<template>
  <div id="Loop">
      <h1>Loop</h1>
      <ul>
          <li v-for="(item, index) in ['Html', 'Css', 'Javascript']" :key="index">{{item}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="(item, index) in ['IOS', 'Andriod', 'Flutter', 'React']" :key="index">{{item}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="(item, index) in aData" :key="index">{{item}}</li>
      </ul>
      <hr>
      <!-- Destructuring -->
      <ul>
          <li v-for="(item, index) in oData" :key="index">{{item.title}} Price {{item.price}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="({title, price, index}) in oData" :key="index">{{title}} Price {{price}}</li>
      </ul>
      <hr>
      <input type="text" placeholder="Title" v-model="course.title"><br>
      <input type="number" placeholder="Title" v-model="course.price"><br>
      <button @click="addCourse">Submit</button>
      <!-- dynamic -->
      <ul>
          <li v-for="(course, index) in dynamicCourse" :key="index">{{course.title}} Price {{course.price}} <button @click="removeCourse(index)">X</button></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Loop",
    methods: {
        addCourse(){
            this.dynamicCourse.push(this.course)
            this.course = {title: "",price: 0}
        },
        removeCourse(index){
            this.dynamicCourse.splice(index, 1)
        },
    },
    data() {
        return {
            aData:['Vue', 'Nodejs', 'Flutter', 'React', 'Javascript'],
            oData:[
                {title:'Iphone',price: 40000},
                {title:'Sumsung',price: 29000},
                {title:'Oppo',price: 15000},
            ],
            course:[{title:"",price: 0}],
            dynamicCourse:[],
        }
    },
}
</script>

<style>
li{
    list-style-type: none;
}
</style>