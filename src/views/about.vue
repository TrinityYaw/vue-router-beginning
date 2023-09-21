<template>

    <div>
        <p>This is the {{ name }} </p>  
    </div>

  
    <h3 class="text-danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
       Libero consequuntur totam cum? Perspiciatis, adipisci sapiente veritatis 
       quod doloribus 
      eveniet minus ullam soluta a error rem totam autem tenetur vel consequatur.
    </h3>
    <h4 class="text-primary">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam minima debitis doloremque voluptates? Laboriosam, corporis? Et, quia officiis totam asperiores
     ducimus voluptate ab nobis laudantium eligendi blanditiis maiores ipsum! Hic.</h4>
    
     <h5 class="text-success"> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in libero aspernatur repudiandae deleniti nesciunt quos maxime mollitia ipsum sit, similique aliquid, cum expedita doloribus dolor. Accusantium minima nostrum laudantium?
    
        </h5>



</template>


<script>

import HelloWorld from '../components/HelloWorld.vue'



export default{
    components : {
    HelloWorld 
},
    data(){
        return{
        name: 'About Page',
        
    }
},

}


</script>