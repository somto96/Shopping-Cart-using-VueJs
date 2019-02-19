<template>
    <div>
        <b-container fluid class="bv-example-row">
       
            <b-row>
              <b-col md="6" offset-md="3">
                <div v-for="(product,index) in cards" :key="index">
                  <div v-if="id == product.id" >
                    <b-card :title="product.title"
                            :img-src="product.image"
                            :img-alt="product.title"
                            img-top
                            tag="article"
                            class="mb-2 text-center">

                     <b-row>
                        <b-col md="2" offset-md="2">
                          <p class="price">Price : </p>
                        </b-col> 
                      </b-row>

                      <div class="row qty text-center">
                        <b-col md='6'>
                          <p>Quantity : </p>
                        </b-col>

                        <b-col md='6'>
                          <b-button class="btn-remove" variant="outline-primary"> - </b-button>
                          <b-button class="btn-checkout" variant="primary"> + </b-button>
                        </b-col>
                      </div>

                      <b-row>
                        <b-col md="6" offset="3">
                          <b-button class="btn__add-to-cart" variant="outline-primary" @click="addToCart(id)">Add to cart</b-button>
                        </b-col>
                      </b-row>
                    </b-card>
                  </div>
                </div>
              </b-col>
            </b-row>
         
        
      </b-container>
    </div>
</template>


<script>
export default {
    name: 'Checkout',
    methods:{
      addToCart(id){
        this.$router.push({name: 'addedToCart', params: {id:id}})
      }
    },
    data(){
        return{
            id: this.$route.params.id,
            cards: [
                {
                    id: 1,
                    image: 'https://ng.jumia.is/7Gt9JvYcVgWWU-3aVDiSjwgbn8Y=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/33/46488/1.jpg?2908',
                    title: 'HP X1200 Flyer Red Wired Mouse',
                    description: 'Simplicity made stylish. Simply plug in and experience smooth control using documents, creating art, reviewing the web and more - regardless if you are left or right-handed.'
                },

                {
                    id: 2,
                    image: 'https://ng.jumia.is/69ODqSLUq4_OnAXZBSlMAG-l2zI=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/58/962452/1.jpg?5332',
                    title: 'Mi Redmi 6',
                    description: 
                    `   
                        Xiaomi Redmi 6 as a smartphone features 5.45 inch screen afford you a vivid and different visual experience.
                    `
                },

                {
                    id: 3,
                    image: 'https://picsum.photos/600/300/?image=24',
                    title: 'Card-three',
                    description: 'Some quick example text'
                },

                {
                    id: 4,
                    image: 'https://picsum.photos/600/300/?image=20',
                    title: 'Card-four',
                    description: 'Lorem Ipsum'
                },

                {
                    id: 5,
                    image: 'https://picsum.photos/600/300/?image=19',
                    title: 'Card-five',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                },

                {
                    id: 6,
                    image: 'https://ng.jumia.is/7goojkIHRsNVeG3snVmTc1yEm-I=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/49/182581/1.jpg?5314',
                    title: ` Generic 1 Luxury Glass Beads Door String Tassel Curtain Wedding Divider Panel Room Decor `,
                    description: '1x Luxury Glass Beads Door String Tassel Curtain Wedding Divider Panel Room Decor （not include the pendant)'
                },

            ]
        }
     }

}
</script>

<style scoped>
  .price{
    text-align: left;
  }

  .btn-remove,
  .btn-checkout{
    border-radius: 50%;
  }

  .btn-checkout{
    margin-left: 20px;
  }
  
  .btn-checkout,
  .btn-remove{
    line-height: 1.2;
  }
</style>
