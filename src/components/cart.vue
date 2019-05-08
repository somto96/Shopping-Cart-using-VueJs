<template>
    <div class="container">
      <div class="cart-list" v-for="(product, index) in getProductsInCart" :key="index" >
        <div class="row">
          <b-col md="3">
            <img class="product-img" :src="product.image" :alt="product.title" >
          </b-col>
          <b-col md="3" class="cart-title">
            <h3> {{product.title}} </h3>
          </b-col>
          <b-col md="3" class="cart-price">
            <h3> Price:  ₦{{product.price}} </h3>
          </b-col>
          <b-col md="3">
            <b-button class="btn-remove" variant="primary" to="/" @click="remove(index)">Remove Product</b-button>
          </b-col>
        </div>
      </div>
      
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Cart',
  methods: {
      ...mapActions([
       'removeProduct'
      ]),

      remove(index){
        this.removeProduct(index)
      }
  },

  computed:{
      ...mapGetters([
        'getProductsInCart'
            
      ])
  }
}
</script>

<style scoped>
  .cart-list{
    background-color: rgb(245, 243, 243) !important;
    margin-top: 10% !important;
    text-align: center;
    padding: 5% 5%;
  }

  .cart-price,
  .cart-title{
    padding: 5% 5%;
  }

  .product-img{
    width: 90% !important;
    margin-left: 0% !important;
  }

  .btn-remove{
    border-radius: 5px;
    margin-top: 30%;
  }
</style>
