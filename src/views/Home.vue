<template>
  <div class="home">
  <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Products from '@/components/products.vue'
export default {
  name: 'home',
  components: {
    Products
  }
}
</script>
