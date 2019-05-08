<template>
    <div>
      <b-container fluid class="bv-example-row">
       
            <b-row>
              <b-col md="6" offset-md="3">
                <div >
                  <div>
                    <b-card :title="currentProduct.title"
                            :img-src="currentProduct.image"
                            :img-alt="currentProduct.title"
                            img-top
                            tag="article"
                            class="mb-2 text-center">

                      <p class="card-text">
                        {{currentProduct.description}}
                      </p>
                      <p class="card-price" mt='3'>
                          Price(₦): {{currentProduct.price}}
                      </p>
                      <div class="btn">
                        <b-button class="btn-return" variant="outline-primary" @click="returnHome()">Back</b-button>
                        <b-button class="btn-checkout" variant="primary" to="/checkout">Check out</b-button>
                      </div>
                    
                    </b-card>
                  </div>
                </div>
              </b-col>
            </b-row>
         
        
      </b-container>
      
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Details",
  methods:{
    returnHome(){
      this.$router.push({name: "home"})
    },

    ...mapActions([
        'addProduct',
               
    ]),
    
  },

  computed:{
    ...mapGetters({
        currentProduct:'getCurrentProduct',
    })
  }
}
</script>

<style scoped>
  .bv-example-row{
    margin: 5% 0 !important;
    /* align-items:center !important;
    justify-content: center !important;   */
  }

  .btn{
    padding: 5px 5px;
  }

  .btn-return{
    margin-right: 5px;
  }

  .btn-buy{
    margin-left: 10px;
  }

  .card-img-top{
    width: 50% !important;
    margin-left: 25% !important;
  }

</style>
