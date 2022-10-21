<template>
    <div>
        
      <button v-on:click = "updatetitle">Update parent title</button>
    </div>
</template>

<script>
export default {
    name:'Child2',
    methods:{
        updatetitle(){
           this.$emit('changetitle',"parent updated")
        }
    }
}
</script>