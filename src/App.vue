<template>
  <div id="app">
    <body>
      <!-- Mid box for navbar -->
      <div class="mid">
        <ul class="navbar">
          <li>
            <a><router-link to="/about">About Us</router-link></a>
          </li>
          <li>
            <a><router-link to="/join">Join Us</router-link></a>
          </li>
        </ul>
      </div>

      <!-- Right box for buttons -->
      <div class="right">
        <button class="btn">Call Us Now</button>
        <button class="btn">Email Us</button>
      </div>

   
    </body>

    <router-view />
    <!-- <h1>{{title}}</h1> -->
    <!-- <Child2 v-on:changetitle ="updatetitle($event)"/> -->

    <!-- to pass data use v-bind -->
    <!-- <PostComponent/> -->
    <!-- <Users/> -->
  </div>
</template>

<script>
// import Child2 from './components/Child2.vue'
// import PostComponent from './components/PostComponent.vue'
// import Users from './components/Users.vue'
export default {
  name: "App",
  components: {
    // Child2,
    // PostComponent,
    // Users
  },
  data() {
    return {
      title: "props tutorial",
    };
  },
  methods: {
    updatetitle(title) {
      this.title = title;
    },
  },
};
</script>
