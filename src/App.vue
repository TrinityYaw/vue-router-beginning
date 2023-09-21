<script>
import HelloWorld from './components/HelloWorld.vue';


export default {
  components: {
    HelloWorld
  }
}

</script>



<template>
  <nav class="nav justify-content-center">
  <router-link to="/" class="my-custom-link nav-link"> Home</router-link>
  <router-link to="/about" class="my-custom-link nav-link">About</router-link>
  <router-link to="/contact" class="my-custom-link nav-link"> Contact</router-link>
</nav>
  <router-view></router-view>


</template>

<style>

.my-custom-link{
  padding-right: 15px
}
.router-link-exact-active{
  color: rgb(37, 36, 36);
  text-decoration: none;
}
.active-link {
  color: green;
  text-decoration: underline;
  /* Add other styles as needed */
}
</style>
