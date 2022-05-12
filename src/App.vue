<template>
  <div class="wrapper">
  <div class="container">
    <Header/>
    <main class="wrapper-content"> 
        <router-view/>
    </main>
    <Footer/>
  </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Header, Footer},
}
</script>

<style>

</style>
