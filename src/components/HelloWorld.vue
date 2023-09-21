<template>

<p class=""> Hello World </p>
<div>
<button @click="increase" class="btn btn-primary">Increase</button></div>
<br />
<p>
<button @click="decrease" class="btn btn-primary">Decrease</button>
</p>

This is count value: {{count}}
</template>

<script>


export default{

data(){
    return{
    count: 0,
       
    }
},
methods:{
    increase(){
this.count++
},
decrease(){
    this.count--
},

},

}


</script>