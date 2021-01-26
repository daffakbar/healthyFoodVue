<template>
<div>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <Navbar/>
  <Container/>
  <Section_1/>
  <Section_2/>
  <Section_3/>
  <Footer/>

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Container from './components/Container.vue'
import Section_1 from './components/Section_1.vue'
import Section_2 from './components/Section_2.vue'
import Section_3 from './components/Section_3.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Navbar,
    Container,
    Section_1,
    Section_2,
    Section_3,
    Footer,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>