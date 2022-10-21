<template>
    <div>
     <form @submit="submitdata" method="post">
       
    <label for="fname">First Name is mohit tiwari</label>
    <input type="text" name="fname" placeholder="First name " v-model="post.firstname" /><br><br>
    
    <label for="lname">Last Name</label>
    <input type="text" name="lname" placeholder="Last name" v-model="post.lastname"/><br><br>
    
    <label for="ename">Email</label>
    <input type="email" name="email" placeholder="Email id " v-model="post.email" /><br><br>
    
    <label for="mobilename">Mobile No</label>
    <input type="tel" name="mobilename" placeholder="Mobile No " v-model="post.mobileno" /><br><br>
    
    <label for="statename">State</label>
    <input type="text" name="statename" placeholder="State " v-model="post.state" /><br><br>

    <label for="countryname">Country</label>
    <input type="text" name="countryname" placeholder="State " v-model="post.country" /><br><br>

    <label for="cityname">City</label>
    <input type="text" name="cityename" placeholder="State " v-model="post.city" /><br><br>

        <button type= "submit">post</button>
     </form>

    </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)
export default {
    name:"Postcomponent",
    data(){
        return{
            post :{
            email:null,
            firstname:null,
            lastname:null,

            }
           
        }
    },
    methods:{
        submitdata(e){
            this.axios.post('http://localhost:3000/post',this.post).then((result)=>{
              console.warn('result',result)
            })
            console.warn(this.post)
            e.preventDefault()

        }

    }

    
}
</script>