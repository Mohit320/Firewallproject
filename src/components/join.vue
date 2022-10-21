<template>
  <!-- <div class="container">
    <h1>Join the best Gym in Ludhiana</h1>
    <form @submit="login">
      <div class="form-group">
        <input
          type="text"
          name=""
          placeholder="Enter your Name"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <input type="text" name="" placeholder="Enter your Age" v-model="age" />
      </div>
      <div class="form-group">
        <input
          type="text"
          name=""
          placeholder="Enter your Gender"
          v-model="gender"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name=""
          placeholder="Enter your Locality"
          v-model="locality"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name=""
          placeholder="Enter your Email Id"
          v-model="emailid"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name=""
          id="static-mask2"
          v-model="phonenumber"
          v-mask="'+91 ######-#####'"
          placeholder="+91-"
        />
      </div> -->
      <div class="form-group">
       
          <div class="mail">
            <h2>Input an IP address and Submit</h2>
           
              <ul>
                <li><input type="text" name="text1" /></li>
                <li>&nbsp;</li>
                <li class="submit">
                  <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    v-on:click="ValidateIPaddress(document.form1.text1)"
                  />
                </li>
                <li>&nbsp;</li>
              </ul>
      
          </div>
    
      </div>
      
</template>
<script>
export default {
  name: "Join",
  data() {
    return {
      error: [],
      name: null,
      age: null,
      gender: null,
      locality: null,
      emailid: null,
      phonenumber: null,
    };
  },
  methods: {
    login(e) {
      this.error = [];

      if (!this.name) {
        this.error.push("Username is required");
      }
      if (!this.age) {
        this.error.push("age  is required");
      }
      if (!this.gender) {
        this.error.push("gender  is required");
      }
      if (!this.locality) {
        this.error.push("locality is required");
      }
      if (!this.emailid) {
        this.error.push("emailid is required");
      }
      if (!this.phonenumber) {
        this.error.push("phonenumber is required");
      }
      e.preventDefault();
      if (this.error) {
        alert(this.error);
      } else {
        alert("No error");
      }
    
    
    },
    ValidateIPaddress(inputText)
 {
 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 if(inputText.value.match(ipformat))
 {
 document.form1.ip_address.focus();
 return true;
 }
 else
 {
 alert("You have entered an invalid IP address!");
 document.form1.ip_address.focus();return false;
 }
 } 
  },
};

</script>
<style>
.form-group input {
  font-family: "Baloo Bhai", cursive;
  text-align: center;
  display: block;
  width: 408px;
  padding: 1px;
  border: 2px solid black;
  margin: 11px auto;
  font-size: 25px;
  border-radius: 8px;
}
</style>