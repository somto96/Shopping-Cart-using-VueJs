<template>
    <div class="container">
        <div class="top-deck">
            <b-card-group columns class=" mb-3 mt-5 ">
                <b-card :title="product.title"
                        :img-src="product.image"
                        :img-alt="product.title"
                        img-top
                        tag="article"
                        v-for="(product, index) in getProducts" 
                        :key="index" 
                        class="product"> 

                    <p class="card-text mb-3" >
                        {{product.description}}
                    </p>
                 

                    <b-button class="btn-buy" to="/details" variant="primary" @click="addCurrentProduct(product)">Purchase</b-button>
                    <!-- <b-button class="btn-details" variant="primary" @click="details(product.id)">Specifications</b-button> -->
                </b-card>
                    
            </b-card-group>
        
       
        </div>
        
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    //props: ['products'],
    methods: {
        ...mapActions([
           'currentProduct'

       ]),

       addCurrentProduct(product){
           this.currentProduct(product)
       }
    },

    computed:{
        ...mapGetters([
            'getProducts'
            
        ])
    }

}
</script>


<style scoped>
    .top-deck{
        margin-top: 10% !important;
    }

    .product{
        padding: 10px 10px;
        display: inline-block;
    }

    .btn-details{
        padding: 5px 5px;
        margin-left :10px;
    }

    /* .btn-details:hover{
        color: #007bff !important;
        border-color: #007bff !important;
        background-color: #ffffff !important;
    } */

    .btn-buy{
        padding: 5px 5px;
        width: 100%;
    }

   
</style>
