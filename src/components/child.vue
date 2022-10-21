<template>
    <div>
        <h1>Child component </h1>
        
        <h3 v-for="users in user" :key="users.name">
            {{users.name}}
         </h3>
    </div>
</template>

<script>
export default {
    name:"Child",
    props:['user']

}
</script>