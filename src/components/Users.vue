<template>
  <div>
    <table border="1px">
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.firstname }}</td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.mobileno }}</td>
        <td>{{ user.country }}</td>
        <td>{{ user.state }}</td>
        <td>{{ user.city }}</td>

        <td><button v-on:click="deleteuser(user.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "Users",
  data() {
    return {
      users: null,
    };
  },
  methods: {
    getusers() {
      this.axios.get("http://localhost:3000/post").then((result) => {
        console.warn(result);
        this.users = result.data;
      });
    },
    deleteuser(id) {
      this.axios.delete("http://localhost:3000/post" + id);
      console.warn(result);
    },
  },
  mounted() {
    this.getusers();
  },
};
</script>